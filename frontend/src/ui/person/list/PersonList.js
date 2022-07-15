import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPeople } from "../../../ducks/people/operations";
import { useNavigate } from "react-router-dom";
import { getAllPeople } from "../../../ducks/people/selectors";
import SortPeopleButton from "./buttons/SortPeopleButton";
import FilterPeopleButton from "./buttons/FilterPeopleButton";
import PersonSearchBar from "./PersonSearchBar";
import AddPersonButton from "./buttons/AddPersonButton";
import PersonPagination from "./PersonPagination";

const PersonList = (props) => {
  const dispatch = useDispatch();

  const peopleState = useSelector((state) => getAllPeople(state));

  useEffect(() => {
    if (peopleState.length === 0) {
      dispatch(getPeople());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setPeople(props.people);
    setAllPeople(props.people);
    setSearchPoolPeople(props.people);
  }, [props.people]);

  const [searchPoolPeople, setSearchPoolPeople] = useState([]);
  const [allPeople, setAllPeople] = useState([]);
  const [people, setPeople] = useState([]);

  const navigate = useNavigate();
  const viewPersonDetails = (personId) => {
    navigate(`/people/${personId}`);
  };

  const [page, setPage] = useState(1);

  return (
    <div className="personPage">
      <div className="personBar">
        <div className="inscription">Person List</div>
        <div className="settingsBar">
          <SortPeopleButton
            setPage={setPage}
            setPeople={setPeople}
            searchPoolPeople={searchPoolPeople}
          />
          <FilterPeopleButton
            setPage={setPage}
            setPeople={setPeople}
            allPeople={allPeople}
            setSearchPoolPeople={setSearchPoolPeople}
          />
          <PersonSearchBar
            setPage={setPage}
            searchPoolPeople={searchPoolPeople}
            setPeople={setPeople}
          />
          <AddPersonButton />
        </div>
      </div>
      <div className="personList">
        {people &&
          people.slice(0, 18).map((person) => (
            <div
              key={person.id}
              className="person"
              onClick={() => viewPersonDetails(person.id)}
            >
              <div className="personInfo">
                <div className="fullName">
                  <div className="firstName">{person.first_name}</div>
                  <div className="lastName">{person.last_name}</div>
                </div>
                <div className="lowerInfo">
                  <div className="date">{person.birth_date.slice(0, 10)}</div>
                  <div className="nationality">{person.nationality}</div>
                </div>
              </div>
              <img alt="personPicture" src={person.image_url}></img>
              {/* <button onClick={() => handleDelete(person)}>
                Delete
              </button> */}
            </div>
          ))}
      </div>
      <PersonPagination
        setPage={setPage}
        page={page}
        searchPoolPeople={searchPoolPeople}
        setPeople={setPeople}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    people: getAllPeople(state),
  };
};

export default connect(mapStateToProps)(PersonList);
