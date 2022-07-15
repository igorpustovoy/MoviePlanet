import AddMovieModal from "../AddMovieModal";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const AddMovieButton = () => {
  const [openAddMovie, setOpenAddMovie] = useState(false);

  const handleOpenAddMovie = () => {
    setOpenAddMovie(true);
  };

  const handleCloseAddMovie = () => {
    setOpenAddMovie(false);
  };
  return (
    <div>
      <div className="addSection" onClick={handleOpenAddMovie}>
        <AddIcon className="icon" />
        Add Movie
      </div>
      <AddMovieModal
        onClose={handleCloseAddMovie}
        openAddMovie={openAddMovie}
      />
    </div>
  );
};

export default AddMovieButton;
