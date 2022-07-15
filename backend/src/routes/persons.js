const express = require("express");
const client = require('../config/psqlClient');
const router = express.Router({mergeParams: true});

const messages = {
    TITLE_DUPLICATE: 'TITLE_DUPLICATE',
    ELEMENT_NOT_EXIST: 'ELEMENT_NOT_EXIST'
};

router.get('/', async (req, res) => {
    const persons = await client.query("SELECT * FROM person");
    return res.send(persons.rows);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    const personsRows = await client.query("SELECT * FROM person WHERE id = $1", [id]); 

    const person = personsRows.rows[0];

    if(!person) {
        return res.status(500).send(messages.ELEMENT_NOT_EXIST);
    }

    return res.send(person);
  });

router.post('/', async (req, res) => {
    const personToAdd = req.body;

    const insertedPersonRows = await client.query(
        "INSERT INTO person (first_name, last_name, birth_date, nationality, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [personToAdd.first_name, personToAdd.last_name, personToAdd.birth_date, personToAdd.nationality, personToAdd.image_url]
      );

    const insertedPerson = insertedPersonRows.rows[0];
    return res.send(insertedPerson);  
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const response = await client.query("DELETE from person WHERE id = $1", [id]);

    return response.rowCount > 0 ? res.sendStatus(200) : res.sendStatus(400); 
});

router.put('/:id', async (req, res) => {
    const personToAdd = req.body;
    const id = req.params.id;

    const result = await client.query(`UPDATE person SET first_name = $1, last_name = $2, birth_date = $3, nationality = $4, image_url = $5 WHERE id = $6`,
        [personToAdd.first_name, personToAdd.last_name, personToAdd.birth_date, personToAdd.nationality, personToAdd.image_url, id]
    );
    
    return result.rowCount > 0 ? res.send(personToAdd) : res.sendStatus(400);
});

module.exports = router;
