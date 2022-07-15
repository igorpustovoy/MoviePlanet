import { Dialog,  DialogContent, DialogTitle } from "@mui/material";
import PersonForm from "./PersonForm";



const AddPersonModal = (props) => {
    const { onClose, openAddPerson} = props;


    const handleCloseAddPerson = () => {
        onClose();
    }

    return (
        <Dialog
              open={openAddPerson}
              onClose={handleCloseAddPerson}
              disableScrollLock={true}
              className="AddPersonDialogue"
            >
              <DialogTitle className="DialogTitle">Enter Person's Information
              <div className="addPersonButton" onClick={() => {handleCloseAddPerson()}}>Close</div>
              </DialogTitle>
              <DialogContent className="DialogContent">
                <PersonForm
                onClose={onClose}
                />
              </DialogContent>
            </Dialog>
    )
}

export default AddPersonModal;