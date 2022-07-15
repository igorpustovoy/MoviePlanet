import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMovieById } from "../../../ducks/movies/selectors";

const MovieInfo = ({ director, movieId }) => {
  const navigate = useNavigate();

  const viewPersonDetails = (personId) => {
    navigate(`/people/${personId}`);
  };

  const movie = useSelector((state) => getMovieById(state, movieId));

  return (
    <div className="infoPage">
      {movie && (
        <div className="singleMovie">
          <img alt="moviePicture" src={movie.image_url}></img>
          <div className="movieDetails">
            <div className="movieTitle">
              <div className="title">{movie.title}</div>
              <div className="genre">{movie.genre}</div>
            </div>
            <div className="movieDescription">
              <div>{movie.description}</div>
            </div>
            <div className="releaseDate">
              Release Date:
              <div>{movie.release_date.slice(0, 10)}</div>
            </div>
            {director !== null && (
              <div className="movieDirector">
                Directored by:
                <div onClick={() => viewPersonDetails(director.id)}>
                  {`${director.first_name} ${director.last_name}`}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
