import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import PersonForm from "../../list/PersonForm";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import { getPersonById } from "../../../../ducks/people/selectors";

const EditPersonButton = ({ personId }) => {
  const person = useSelector((state) => getPersonById(state, personId));

  const [openEditPerson, setOpenEditPerson] = useState(false);

  const handleOpenEditPerson = () => {
    setOpenEditPerson(true);
  };

  const handleCloseEditPerson = () => {
    setOpenEditPerson(false);
  };

  return (
    <div>
      <div className="editPersonButton" onClick={handleOpenEditPerson}>
        <EditIcon fontSize="large" />
        Edit Person
      </div>
      <Dialog
        open={openEditPerson}
        onClose={handleCloseEditPerson}
        disableScrollLock={true}
        className="EditPersonDialogue"
      >
        <DialogTitle className="DialogTitle">
          Enter Personal Information
        </DialogTitle>
        <DialogContent className="DialogContent">
          <PersonForm person={person} closeModal={handleCloseEditPerson} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditPersonButton;
