import { connect, useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../../ducks/movies/operations";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllMovies } from "../../../ducks/movies/selectors";
import SortMoviesButton from "./buttons/SortMoviesButton";
import FilterMoviesButton from "./buttons/FilterMoviesButton";
import SearchBar from "./SearchBar";
import AddMovieButton from "./buttons/AddMovieButton";
import MoviePagination from "./MoviePagination";

const MovieList = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const stateMovies = useSelector((state) => getAllMovies(state));

  useEffect(() => {
    if (stateMovies.length === 0) {
      dispatch(getMovies());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMovies(props.movies);
    setAllMovies(props.movies);
    setSearchPoolMovies(props.movies);
  }, [props.movies]);

  const [searchPoolMovies, setSearchPoolMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  const viewMovieDetails = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  ////////////////////////////////

  const [page, setPage] = useState(1);

  return (
    <div className="moviePage">
      <div className="movieBar">
        <div className="inscription">Movie List</div>
        <div className="settingsBar" style={{ outline: "none" }}>
          <SortMoviesButton
            setMovies={setMovies}
            searchPoolMovies={searchPoolMovies}
            setPage={setPage}
          />
          <FilterMoviesButton
            setMovies={setMovies}
            allMovies={allMovies}
            setSearchPoolMovies={setSearchPoolMovies}
            setPage={setPage}
          />
          <SearchBar
            setMovies={setMovies}
            setPage={setPage}
            searchPoolMovies={searchPoolMovies}
          />
          <AddMovieButton />
        </div>
      </div>
      <div className="movieList">
        {movies &&
          movies.slice(0, 18).map((movie) => (
            <div
              key={movie.id}
              className="movie"
              onClick={() => viewMovieDetails(movie.id)}
            >
              <img alt="moviePicture" src={movie.image_url}></img>
              <div className="movieInfo">
                <div className="upperInfo">
                  <div className="title">{movie.title}</div>
                </div>
                <div className="lowerInfo">
                  <div className="date">{movie.release_date.slice(0, 10)}</div>
                  <div className="genre">{movie.genre}</div>
                </div>
                {/* <button onClick={() => handleDelete(movies.byId[id])}>Delete</button> */}
              </div>
            </div>
          ))}
      </div>
      <MoviePagination
        setPage={setPage}
        page={page}
        setMovies={setMovies}
        searchPoolMovies={searchPoolMovies}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: getAllMovies(state),
  };
};

export default connect(mapStateToProps)(MovieList);
