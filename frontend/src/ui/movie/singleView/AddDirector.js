import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addDirector, deleteCurrentDirector } from "../../../ducks/movies/operations";
import { getPeople } from "../../../ducks/people/operations";

const AddDirector = (props) => {
  const { id } = useParams();
  const { closeModal, currentDirector } = props;

  const movie = useSelector((state) => state.entities["movies"].byId[id]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  const people = useSelector((state) => state.entities["people"]);

  const [director, setDirector] = useState(currentDirector);

  const selectDirector = (director) => {
    setDirector(director);
  };

  const lockInDirector = () => {
    if (director) {
      dispatch(addDirector(director, movie));
      closeModal();
    } 
  };

  const deleteDirector = () => {
    if (movie.director !== null) {
      dispatch(deleteCurrentDirector({}, movie));
      closeModal();
    }
  };

  return (
    <div className="directorAddPanel">
      <div className="directorAddList">
        {people &&
          Object.keys(people.byId).map((id) => (
            <div
              key={people.byId[id].id}
              className={
                director && director.id === people.byId[id].id
                  ? "director directorGrey"
                  : "director"
              }
              onClick={() => selectDirector(people.byId[id])}
            >
              <img alt="Director" src={people.byId[id].image_url}></img>
              <div className="fullName">
                <div>{people.byId[id].first_name}</div>
                <div>{people.byId[id].last_name}</div>
              </div>
            </div>
          ))}
      </div>
      {director && (
        <div className="setDirectorButton" onClick={() => lockInDirector()}>
          Set Director
        </div>
      )}
      {movie.director_id && (
        <div
          className="setDirectorButton deleteDirectorButton"
          onClick={() => deleteDirector()}
        >
          Delete Current Director
        </div>
      )}
    </div>
  );
};

export default AddDirector;
