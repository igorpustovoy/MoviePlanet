import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import AddActor from "../AddActor";

const AddActorButton = () => {
  const [openAddActor, setOpenAddActor] = useState(false);

  const handleOpenAddActor = () => {
    setOpenAddActor(true);
  };

  const handleCloseAddActor = () => {
    setOpenAddActor(false);
  };
  return (
    <div>
      <div className="addActorButton" onClick={handleOpenAddActor}>
        <TheaterComedyIcon fontSize="large" />
        Add Actor
      </div>
      <Dialog
        open={openAddActor}
        onClose={handleCloseAddActor}
        disableScrollLock={true}
        className="AddActorDialogue"
      >
        <DialogTitle className="DialogTitle">Choose Actors</DialogTitle>
        <DialogContent className="DialogContent">
          <AddActor closeModal={handleCloseAddActor} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddActorButton;
