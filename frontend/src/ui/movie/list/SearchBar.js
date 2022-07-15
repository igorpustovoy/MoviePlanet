import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setMovies, setPage, searchPoolMovies }) => {
  const handleMovieSearch = (event) => {
    const searchWord = event.target.value;
    setMovies(
      searchPoolMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchWord.toLowerCase())
      )
    );
    setPage(1);
  };
  return (
    <div className="searchSection">
      <input
        type="text"
        placeholder="Enter a movie title"
        onChange={handleMovieSearch}
      ></input>
      <div className="icon">
        <SearchIcon fontSize="medium" />
      </div>
    </div>
  );
};

export default SearchBar;
