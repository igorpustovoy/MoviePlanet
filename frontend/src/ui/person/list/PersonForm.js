import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addPerson, editPerson } from '../../../ducks/people/operations';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const PersonForm = (props) => {

    const { onClose, person, closeModal } = props;

    const dispatch = useDispatch();

    const { id } = useParams();

    const handlePersonSubmit = (values) => {
        if(id) {
            dispatch(editPerson(values, id));
            closeModal();
        }
        else {
            dispatch(addPerson(values));
            onClose();
        }
    }

    const validatePerson = Yup.object().shape({
        first_name: Yup.string().max(60, "First name is too long").required("First name required"),
        last_name: Yup.string().max(60, "Last name is too long").required("Last name required"),
        birth_date: Yup.date().required("Birth date required"),
        nationality: Yup.string().max(60, "Nationality is too long").required("Nationality required"),
        image_url: Yup.string().url("Enter url"),
    });
    
    useEffect(() => {
        if(id) {
            setInitial({
                first_name: person.first_name,
                last_name: person.last_name,
                birth_date: person.birth_date.slice(0, 10),
                nationality: person.nationality,
                image_url: person.image_url, 
            });
            setButtonText("Edit Person");
        }
        else {
            setButtonText("Add Person");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const [initial, setInitial] = useState({
        first_name: '',
        last_name: '',
        birth_date: '',
        nationality: '',
        image_url: '', 
    });
    const [buttonText, setButtonText] = useState('');

    return (
        <div className="personForm">
            <Formik
            initialValues={initial}
            onSubmit={(values) => handlePersonSubmit(values)}
            enableReinitialize={true}
            validationSchema={validatePerson}
            >
                <Form className="form">
                    <Field name="first_name" type="text" className="field" placeholder="Enter first name"></Field>
                    <ErrorMessage component="div" name="first_name" className='errorMessage' />
                    <Field name="last_name" type="text" className="field" placeholder="Enter last name"></Field>
                    <ErrorMessage component="div" name="last_name"  className='errorMessage'/>
                    <Field name="birth_date" type="date" className="field" ></Field>
                    <ErrorMessage component="div" name="birth_date" className='errorMessage' />
                    <Field name="nationality" type="text" className="field" placeholder="Enter nationality"></Field>
                    <ErrorMessage component="div" name="nationality" className='errorMessage' />
                    <Field name="image_url" type="url" className="field" placeholder="Enter picture url"></Field>
                    <ErrorMessage  component="div" name="image_url" className='errorMessage' />
                    <button type="submit">{buttonText}</button>
                </Form>
            </Formik>
        </div>
    )
}

export default PersonForm;