import { useState } from "react";
import MovieForm from "../../list/MovieForm";
import EditIcon from "@mui/icons-material/Edit";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useSelector } from "react-redux";
import { getMovieById } from "../../../../ducks/movies/selectors";

const EditMovieButton = ({ movieId }) => {
  const [openEditMovie, setOpenEditMovie] = useState(false);

  const handleOpenEditMovie = () => {
    setOpenEditMovie(true);
  };

  const handleCloseEditMovie = () => {
    setOpenEditMovie(false);
  };

  const movie = useSelector((state) => getMovieById(state, movieId));

  return (
    <div>
      <div className="editMovieButton" onClick={handleOpenEditMovie}>
        <EditIcon fontSize="large" />
        Edit Movie
      </div>
      <Dialog
        open={openEditMovie}
        onClose={handleCloseEditMovie}
        disableScrollLock={true}
        className="EditMovieDialogue"
      >
        <DialogTitle className="DialogTitle">Enter Movie Details</DialogTitle>
        <DialogContent className="DialogContent">
          <MovieForm movie={movie} closeModal={handleCloseEditMovie} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditMovieButton;
