import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActors } from "../../../ducks/actors/operations";
import { getAllActors } from "../../../ducks/actors/selectors";
import { getMovies } from "../../../ducks/movies/operations";
import { getAllMovies } from "../../../ducks/movies/selectors";
import { getPeople } from "../../../ducks/people/operations";
import { getAllPeople } from "../../../ducks/people/selectors";
import EditPersonButton from "./buttons/EditPersonButton";
import DeletePersonButton from "./buttons/DeletePersonButton";
import MovieSlider from "./MovieSlider";
import PersonInfo from "./PersonInfo";

const SinglePerson = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allActors = useSelector((state) => getAllActors(state));
  const allMovies = useSelector((state) => getAllMovies(state));
  const allPeople = useSelector((state) => getAllPeople(state));

  useEffect(() => {
    if (allMovies.length === 0) {
      dispatch(getMovies());
    }
    if (allPeople.length === 0) {
      dispatch(getPeople());
    }
    if (allActors.length === 0) {
      dispatch(getActors());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="singlePersonPage">
      <PersonInfo personId={id} />
      <div className="buttonPage">
        <div className="buttonBar">
          <EditPersonButton personId={id} />
          <DeletePersonButton personId={id} />
        </div>
      </div>
      <MovieSlider personId={id} />
    </div>
  );
};

export default SinglePerson;
