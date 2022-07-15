import FilterListIcon from "@mui/icons-material/FilterList";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllPersonNationalities } from "../../../../ducks/people/selectors";

const FilterPeopleButton = ({ setPeople, allPeople, setSearchPoolPeople, setPage }) => {
  const nationalities = useSelector((state) =>
    getAllPersonNationalities(state)
  );

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilterModal = () => {
    setOpenFilter(true);
  };

  const handleCloseFilterModal = () => {
    setOpenFilter(false);
  };

  const [selectedNationalities, setSelectedNationalities] = useState([]);

  const handleAddNationality = (nationality) => {
    if (selectedNationalities.includes(nationality)) {
      setSelectedNationalities(
        selectedNationalities.filter((n) => n !== nationality)
      );
    } else {
      setSelectedNationalities([...selectedNationalities, nationality]);
    }
  };

  const applyFilters = () => {
    if (selectedNationalities.length > 0) {
      setPeople(
        allPeople.filter(
          (person) =>
            selectedNationalities.includes(person.nationality) &&
            person.birth_date <= dateTo &&
            person.birth_date >= dateFrom
        )
      );
      setSearchPoolPeople(
        allPeople.filter(
          (person) =>
            selectedNationalities.includes(person.nationality) &&
            person.birth_date <= dateTo &&
            person.birth_date >= dateFrom
        )
      );
    } else {
      setPeople(
        allPeople.filter(
          (person) =>
            person.birth_date <= dateTo && person.birth_date >= dateFrom
        )
      );
      setSearchPoolPeople(
        allPeople.filter(
          (person) =>
            person.birth_date <= dateTo && person.birth_date >= dateFrom
        )
      );
    }
    setPage(1);
    setOpenFilter(false);
  };

  const getCurrentDate = () => {
    const year = new Date().getFullYear();
    if (String(new Date().getMonth() + 1).length === 1) {
      var month = `0${new Date().getMonth() + 1}`;
    } else {
      month = `${new Date().getMonth() + 1}`;
    }
    if (String(new Date().getDate()).length === 1) {
      var day = `0${new Date().getDate()}`;
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
        className="FilterPeopleDialogue"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle className="DialogTitle">Filters</DialogTitle>
        <DialogContent className="DialogContent">
          <div className="nationalityList">
            {nationalities &&
              nationalities.map((nationality) => (
                <div
                  key={nationality}
                  className={
                    selectedNationalities.includes(nationality)
                      ? "nationalityRed"
                      : "nationalityWhite"
                  }
                  onClick={() => {
                    handleAddNationality(nationality);
                  }}
                >
                  {nationality}
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
                max={getCurrentDate()}
                onChange={(value) => handleDateFromChange(value)}
              ></input>
            </div>
            <div className="dateTo">
              To
              <input
                type="date"
                value={dateTo}
                min="1900-01-01"
                max={getCurrentDate()}
                onChange={(value) => handleDateToChange(value)}
              ></input>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="DialogActions">
          <div
            className="filterButton"
            onClick={() => {
              setSelectedNationalities([]);
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

export default FilterPeopleButton;
