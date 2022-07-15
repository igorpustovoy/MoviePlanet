import SearchIcon from "@mui/icons-material/Search";

const PersonSearchBar = ({ setPeople, searchPoolPeople, setPage }) => {
  const handlePersonSearch = (event) => {
    const searchWord = event.target.value;
    setPeople(
      searchPoolPeople.filter((person) => {
        return (
          person.first_name.toLowerCase().includes(searchWord.toLowerCase()) ||
          person.last_name.toLowerCase().includes(searchWord.toLowerCase())
        );
      })
    );
    setPage(1);
  };

  return (
    <div className="searchSection">
      <input
        type="text"
        placeholder="Enter a person name"
        onChange={handlePersonSearch}
      ></input>
      <div className="icon">
        <SearchIcon fontSize="medium" />
      </div>
    </div>
  );
};

export default PersonSearchBar;
