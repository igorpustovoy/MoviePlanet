import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addActor, getActors } from "../../../ducks/actors/operations";
import { getAllActorsForMovieId } from "../../../ducks/actors/selectors";
import { getPeople } from "../../../ducks/people/operations";
import { getAllPeople } from "../../../ducks/people/selectors";

const AddActor = (props) => {
  const { id } = useParams();
  const { closeModal } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeople());
    dispatch(getActors());
  }, [dispatch]);

  const people = useSelector((state) => getAllPeople(state));
  const usedActors = useSelector((state) => getAllActorsForMovieId(state, id));

  const [actors, setActors] = useState([]);

  const selectActor = (actor) => {
    if (actors.includes(actor)) {
      setActors(actors.filter((a) => a.id !== actor.id));
    } else {
      setActors([...actors, actor]);
    }
  };

  const lockInActors = () => {
    if (actors.length > 0) {
      for (const actor of actors) {
        closeModal();
        dispatch(addActor(id, actor));
        setActors([]);
      }
    }
  };

  return (
    <div className="actorAddPanel">
      <div className="actorAddList">
        {people &&
          people
            .filter((person) => !usedActors.includes(person))
            .map((person) => (
              <div
                key={person.id}
                className={
                  actors.includes(person) ? "actor actorGrey" : "actor"
                }
                onClick={() => selectActor(person)}
              >
                <img alt="actor" src={person.image_url}></img>
                <div className="fullName">
                  <div>{person.first_name}</div>
                  <div>{person.last_name}</div>
                </div>
              </div>
            ))}
      </div>
      <div className="addActorButton" onClick={() => lockInActors()}>
        Add Actors
      </div>
    </div>
  );
};

export default AddActor;
