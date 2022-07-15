import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllMovieGenres } from "../../../../ducks/movies/selectors";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const FilterMoviesButton = ({ setMovies, setSearchPoolMovies, setPage, allMovies }) => {
  const genres = useSelector((state) => getAllMovieGenres(state));

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilterModal = () => {
    setOpenFilter(true);
  };

  const handleCloseFilterModal = () => {
    setOpenFilter(false);
  };

  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleAddGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const applyFilters = () => {
    if (selectedGenres.length > 0) {
      setMovies(
        allMovies.filter(
          (movie) =>
            selectedGenres.includes(movie.genre) &&
            movie.release_date <= dateTo &&
            movie.release_date >= dateFrom
        )
      );
      setSearchPoolMovies(
        allMovies.filter(
          (movie) =>
            selectedGenres.includes(movie.genre) &&
            movie.release_date <= dateTo &&
            movie.release_date >= dateFrom
        )
      );
    } else {
      setMovies(
        allMovies.filter(
          (movie) =>
            movie.release_date <= dateTo && movie.release_date >= dateFrom
        )
      );
      setSearchPoolMovies(
        allMovies.filter(
          (movie) =>
            movie.release_date <= dateTo && movie.release_date >= dateFrom
        )
      );
    }
    setPage(1);
    setOpenFilter(false);
  };

  const getCurrentDate = () => {
    const year = new Date().getFullYear();
    let month;
    let day;
    if (String(new Date().getMonth() + 1).length === 1) {
      month = `0${new Date().getMonth() + 1}`;
    } else {
      month = `${new Date().getMonth() + 1}`;
    }
    if (String(new Date().getDate()).length === 1) {
      day = `0${new Date().getDate()}`;
    } else {
      day = `${new Date().getDate()}`;
    }
    return `${year}-${month}-${day}`;
  };

  const [dateFrom, setDateFrom] = useState(`1900-01-01`);

  const handleDateFromChange = (e) => {
    setDateFrom(e.target.value);
  };

  const [dateTo, setDateTo] = useState(getCurrentDate());

  const handleDateToChange = (e) => {
    setDateTo(e.target.value);
  };
  return (
    <div className="filterSection">
      <div className="filterButton" onClick={handleOpenFilterModal}>
        <FilterListIcon />
        <div>Filter</div>
      </div>
      <Dialog
        open={openFilter}
        onClose={handleCloseFilterModal}
        disableScrollLock={true}
        className="FilterMoviesDialogue"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle className="DialogTitle">Filters</DialogTitle>
        <DialogContent className="DialogContent">
          <div className="genreList">
            {genres &&
              genres.map((genre) => (
                <div
                  key={genre}
                  className={
                    selectedGenres.includes(genre) ? "genreRed" : "genreWhite"
                  }
                  onClick={() => {
                    handleAddGenre(genre);
                  }}
                >
                  {genre}
                </div>
              ))}
          </div>
          <div className="dateFilter">
            <div className="dateFrom">
              From
              <input
                type="date"
                value={dateFrom}
                min="1900-01-01"
                max="2030-01-01"
                onChange={(value) => handleDateFromChange(value)}
              ></input>
            </div>
            <div className="dateTo">
              To
              <input
                type="date"
                value={dateTo}
                min="1900-01-01"
                max="2030-01-01"
                onChange={(value) => handleDateToChange(value)}
              ></input>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="DialogActions">
          <div
            className="filterButton"
            onClick={() => {
              setSelectedGenres([]);
              setDateFrom(`1900-01-01`);
              setDateTo(getCurrentDate());
            }}
          >
            Reset
          </div>
          <div
            className="filterButton"
            onClick={() => {
              applyFilters();
            }}
          >
            Apply
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FilterMoviesButton;
