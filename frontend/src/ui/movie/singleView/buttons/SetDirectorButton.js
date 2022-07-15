import { useState } from "react";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import AddDirector from "../AddDirector";

const SetDirectorButton = ({ director }) => {
  const [openSetDirector, setOpenSetDirector] = useState(false);

  const handleOpenSetDirector = () => {
    setOpenSetDirector(true);
  };

  const handleCloseSetDirector = () => {
    setOpenSetDirector(false);
  };

  return (
    <div>
      <div className="setDirectorButton" onClick={handleOpenSetDirector}>
        <LocalMoviesIcon fontSize="large" />
        Set Director
      </div>
      <Dialog
        open={openSetDirector}
        onClose={handleCloseSetDirector}
        disableScrollLock={true}
        className="SetDirectorDialogue"
      >
        <DialogTitle className="DialogTitle">
          <div>Choose Director</div>
        </DialogTitle>
        <DialogContent className="DialogContent">
          <AddDirector
            currentDirector={director}
            closeModal={handleCloseSetDirector}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SetDirectorButton;
