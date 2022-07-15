import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { getPersonById } from "../../../../ducks/people/selectors";
import { useNavigate } from "react-router-dom";
import { getAllMoviesDirectedBy } from "../../../../ducks/movies/selectors";
import { getAllMoviesActedIn } from "../../../../ducks/actors/selectors";
import { deletePerson } from "../../../../ducks/people/operations";

const DeletePersonButton = ({ personId }) => {
  const dispatch = useDispatch();

  const person = useSelector((state) => getPersonById(state, personId));

  const navigate = useNavigate();

  const moviesDirected = useSelector((state) =>
    getAllMoviesDirectedBy(state, personId)
  );
  const moviesActedIn = useSelector((state) =>
    getAllMoviesActedIn(state, personId)
  );

  const [warning, setWarning] = useState(undefined);

  const handleDelete = (personToDelete) => {
    if (moviesDirected.length === 0 && moviesActedIn.length === 0) {
      dispatch(deletePerson(personToDelete));
      navigate("/people");
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
      <div
        className="deletePersonButton"
        onClick={handleOpenDeleteConfirmation}
      >
        <DeleteIcon fontSize="large" />
        Delete Person
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
              Remove this actor from movies he directed or acted in first.
            </div>
          )}
        </DialogContent>
        <DialogActions className="DialogActions">
          <div
            className="yesButton"
            onClick={() => {
              handleDelete(person);
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

export default DeletePersonButton;
