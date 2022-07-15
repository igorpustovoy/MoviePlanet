import { useState } from "react";
import AddPersonModal from "../AddPersonModal";
import AddIcon from "@mui/icons-material/Add";

const AddPersonButton = (props) => {
  const [openAddPerson, setOpenAddPerson] = useState(false);

  const handleOpenAddPerson = () => {
    setOpenAddPerson(true);
  };

  const handleCloseAddPerson = () => {
    setOpenAddPerson(false);
  };
  return (
    <div>
      <div className="addSection" onClick={handleOpenAddPerson}>
        <AddIcon className="icon" />
        Add Person
      </div>
      <AddPersonModal
        onClose={handleCloseAddPerson}
        openAddPerson={openAddPerson}
      />
    </div>
  );
};

export default AddPersonButton;
