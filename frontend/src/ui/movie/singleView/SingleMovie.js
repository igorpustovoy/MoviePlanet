import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActors } from "../../../ducks/actors/operations";
import { getAllActors } from "../../../ducks/actors/selectors";
import { getMovies } from "../../../ducks/movies/operations";
import { getAllMovies, getMovieById } from "../../../ducks/movies/selectors";
import { getPeople } from "../../../ducks/people/operations";
import { getAllPeople } from "../../../ducks/people/selectors";
import SetDirectorButton from "./buttons/SetDirectorButton";
import AddActorButton from "./buttons/AddActorButton";
import EditMovieButton from "./buttons/EditMovieButton";
import DeleteMovieButton from "./buttons/DeleteMovieButton";
import ActorSection from "./ActorSection";
import MovieInfo from "./MovieInfo";

const SingleMovie = () => {
  const dispatch = useDispatch();

  const [director, setDirector] = useState(null);

  const { id } = useParams();

  const allActors = useSelector((state) => getAllActors(state));
  const movies = useSelector((state) => getAllMovies(state));
  const people = useSelector((state) => getAllPeople(state));

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(getMovies());
    }
    if (people.length === 0) {
      dispatch(getPeople());
    }
    if (allActors.length === 0) {
      dispatch(getActors());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const movie = useSelector((state) => getMovieById(state, id));

  useEffect(() => {
    if (movie !== undefined) {
      const directorId = movie.director_id;
      if (![null, undefined].includes(directorId) && people.length > 0) {
        setDirector(
          people.find((person) => parseInt(person.id) === parseInt(directorId))
        );
      } else {
        setDirector(null);
      }
    }
  }, [movie, people]);

  return (
    <div className="singleMoviePage">
      <MovieInfo movieId={id} director={director} />
      <div className="buttonPage">
        <div className="buttonBar">
          <SetDirectorButton director={director} />
          <AddActorButton />
          <EditMovieButton movieId={id} />
          <DeleteMovieButton movieId={id} director={director} />
        </div>
      </div>
      <ActorSection movieId={id} />
    </div>
  );
};

export default SingleMovie;
