import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import MovieForm from "./MovieForm";


const AddMovieModal = (props) => {
    const { onClose, openAddMovie} = props;


    const handleCloseAddMovie = () => {
        onClose();
    }

    return (
        <Dialog
              open={openAddMovie}
              onClose={handleCloseAddMovie}
              disableScrollLock={true}
              className="AddMovieDialogue"
            >
              <DialogTitle className="DialogTitle">Enter Movie Details
              <div className="addMovieButton" onClick={() => {handleCloseAddMovie()}}>Close</div>
              </DialogTitle>
              <DialogContent className="DialogContent">
                <MovieForm
                onClose={onClose}
                />
              </DialogContent>
            </Dialog>
    )
}

export default AddMovieModal;