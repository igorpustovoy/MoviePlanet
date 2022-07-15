import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteActor } from "../../../ducks/actors/operations";
import { getAllActorsForMovieId } from "../../../ducks/actors/selectors";
import ClearIcon from "@mui/icons-material/Clear";

const ActorSection = ({ movieId }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const actors = useSelector((state) => getAllActorsForMovieId(state, movieId));

  const handleDeleteActor = (actorToDelete) => {
    dispatch(deleteActor(actorToDelete.id, movieId));
  };

  const viewPersonDetails = (personId) => {
    navigate(`/people/${personId}`);
  };

  return (
    <div>
      {actors.length > 0 && (
        <div className="actorPage">
          <div className="title">Movie Cast</div>
          <div className="actorList">
            {actors &&
              actors.map((actor) => (
                <div key={actor.id} className="actor">
                  <div
                    className="deleteButton"
                    onClick={() => handleDeleteActor(actor)}
                  >
                    <ClearIcon />
                  </div>
                  <img
                    alt="actorPicture"
                    src={actor.image_url}
                    onClick={() => viewPersonDetails(actor.id)}
                  ></img>
                  <div
                    className="actorFullName"
                    onClick={() => viewPersonDetails(actor.id)}
                  >
                    <div>{actor.first_name}</div>
                    <div>{actor.last_name}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ActorSection;
