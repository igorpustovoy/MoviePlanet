import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { deleteMovie } from "../../../../ducks/movies/operations";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllActorsForMovieId } from "../../../../ducks/actors/selectors";
import { getMovieById } from "../../../../ducks/movies/selectors";

const DeleteMovieButton = ({ movieId, director }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [warning, setWarning] = useState(undefined);

  const movie = useSelector((state) => getMovieById(state, movieId));
  const actors = useSelector((state) => getAllActorsForMovieId(state, movieId));

  const handleDelete = (movieToDelete) => {
    if (actors.length === 0 && director === null) {
      dispatch(deleteMovie(movieToDelete));
      navigate("/movies");
    } else {
      setWarning(true);
    }
  };

  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);

  const handleOpenDeleteConfirmation = () => {
    setOpenDeleteConfirmation(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setOpenDeleteConfirmation(false);
    setTimeout(() => setWarning(undefined), 200);
  };

  return (
    <div>
      <div className="deleteMovieButton" onClick={handleOpenDeleteConfirmation}>
        <DeleteIcon fontSize="large" />
        Delete Movie
      </div>
      <Dialog
        open={openDeleteConfirmation}
        onClose={handleCloseDeleteConfirmation}
        disableScrollLock={true}
        className="DeleteConfirmationDialogue"
      >
        <DialogTitle className="DialogTitle">Are you sure?</DialogTitle>
        <DialogContent>
          {warning && (
            <div className="warning">
              Remove actors and directors from this movie first.
            </div>
          )}
        </DialogContent>
        <DialogActions className="DialogActions">
          <div
            className="yesButton"
            onClick={() => {
              handleDelete(movie);
            }}
          >
            Yes
          </div>
          <div className="noButton" onClick={handleCloseDeleteConfirmation}>
            No
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteMovieButton;
