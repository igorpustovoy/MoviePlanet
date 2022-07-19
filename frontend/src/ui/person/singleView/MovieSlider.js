import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllMoviesActedIn } from "../../../ducks/actors/selectors";
import { getAllMoviesDirectedBy } from "../../../ducks/movies/selectors";

const MovieSlider = ({ personId }) => {
  const navigate = useNavigate();

  const moviesDirected = useSelector((state) =>
    getAllMoviesDirectedBy(state, personId)
  );
  const moviesActedIn = useSelector((state) =>
    getAllMoviesActedIn(state, personId)
  );

  const viewMovieDetails = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  console.log("Movies acted in:", moviesActedIn);
  console.log("Movies directed:", moviesDirected);

  return (
    <div className="movieSliderPage">
      {Array.isArray(moviesDirected) && moviesDirected.length > 0 && !moviesDirected.includes(undefined) && (
        <div className="movieSlider directed">
          <div className="title">Directed Movies:</div>
          <div className="pageMovieList">
            {moviesDirected.map((movie) => (
              <div
                key={movie.id}
                className="pageMovie"
                onClick={() => {
                  viewMovieDetails(movie.id);
                }}
              >
                <img
                  alt="moviePicture"
                  src={movie.image_url}
                  height={200}
                  width={150}
                ></img>
                <div className="movieDetails">
                  <div>{movie.title}</div>
                  <div>{movie.genre}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {Array.isArray(moviesActedIn) && moviesActedIn.length > 0 && !moviesActedIn.includes(undefined) && (
        <div className="movieSlider actedIn">
          <div className="title">Acted In:</div>
          <div className="pageMovieList">
            {moviesActedIn.map((movie) => (
              <div
                key={movie.id}
                className="pageMovie"
                onClick={() => {
                  viewMovieDetails(movie.id);
                }}
              >
                <img
                  alt="moviePicture"
                  src={movie.image_url}
                  height={200}
                  width={150}
                ></img>
                <div className="movieDetails">
                  <div>{movie.title}</div>
                  <div>{movie.genre}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieSlider;
