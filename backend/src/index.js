const express = require('express');
const app = express();
const cors = require('cors');
const client = require('./config/psqlClient');
const movies = require('./routes/movies');
const persons = require('./routes/persons');
const actors = require('./routes/actors');
const moviesImport = require('./data/movies');
const personsImport = require('./data/persons');
const actorsImport = require('./data/actors');

app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use("/movies", movies);
app.use("/persons", persons);
app.use("/actors", actors);

client
.connect()
.then( async () => {
  console.log('Connected to PostgreSQL');

  client.query(`CREATE TABLE IF NOT EXISTS person (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    birth_date DATE NOT NULL,
    nationality VARCHAR(60) NOT NULL,
    image_url VARCHAR NULL
  );
  
  CREATE TABLE IF NOT EXISTS movie (
    id SERIAL PRIMARY KEY,
    title VARCHAR UNIQUE NOT NULL,
    genre VARCHAR(50) NOT NULL,
    release_date DATE NOT NULL,
    description VARCHAR NOT NULL,
    image_url VARCHAR NULL,
    director_id INTEGER NULL, 
    FOREIGN KEY (director_id) REFERENCES person (id)
  );
  
  
  CREATE TABLE IF NOT EXISTS actor (
    id SERIAL PRIMARY KEY,
    movie_id INTEGER NOT NULL,
    person_id INTEGER NOT NULL, 
    FOREIGN KEY (person_id) REFERENCES person (id),
    FOREIGN KEY (movie_id) REFERENCES movie (id)
  );
  `);

  const peopleInDb = await client.query("SELECT * FROM person");
  if(peopleInDb.rows.length === 0) {
    for (const person of personsImport) {
        await client.query(
            "INSERT INTO person (first_name, last_name, birth_date, nationality, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [person.first_name, person.last_name, person.birth_date, person.nationality, person.image_url]
          );
    }
  }

  const moviesInDb = await client.query("SELECT * FROM movie");
  if(moviesInDb.rows.length === 0) {
    for (const movie of moviesImport) {
        console.log(movie.director_id);
        await client.query(
            "INSERT INTO movie (title, genre, release_date, description, image_url, director_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [
              movie.title,
              movie.genre,
              movie.release_date,
              movie.description,
              movie.image_url,
              movie.director_id,
            ]
          );
    }
  }

  const actorsInDb = await client.query("SELECT * FROM actor");
  if(actorsInDb.rows.length === 0) {
    for (const actor of actorsImport) {
        const existingPerson = await client.query(
            "SELECT * FROM person WHERE id = $1",
            [actor.person_id]
          );

        const existingMovie = await client.query(
            "SELECT * FROM movie WHERE id = $1",
            [actor.movie_id]
            );

        if(existingPerson.rows[0] && existingMovie.rows[0]) {
            await client.query(
                `INSERT INTO actor (movie_id, person_id) VALUES ($1, $2) RETURNING *`,
                [actor.movie_id, actor.person_id]
              );
        }
    }
  }

  const port = process.env.PORT || 5000
  app.listen(port, () => {
    console.log(`API server listening at http://localhost:${port}`);
  });
})
.catch(err => console.error('Connection error', err.stack));