import { useSelector } from "react-redux";
import { getPersonById } from "../../../ducks/people/selectors";

const PersonInfo = ({ personId }) => {
  const person = useSelector((state) => getPersonById(state, personId));

  return (
    <div className="infoPage">
      {person && (
        <div className="singlePerson">
          <img alt="person" src={person.image_url}></img>
          <div className="personDetails">
            <div className="fullName">
              <div>{person.first_name}</div>
              <div>{person.last_name}</div>
            </div>
            <div className="otherDetails">
              <div className="birthDate">
                Born:
                <div>{person.birth_date.slice(0, 10)}</div>
              </div>
              <div className="nationality">
                Nationality:
                <div>{person.nationality}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonInfo;
