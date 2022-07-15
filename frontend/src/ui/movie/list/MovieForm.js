import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addMovie, editMovie } from '../../../ducks/movies/operations';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieForm = (props) => {

    const { onClose, movie, closeModal } = props;

    const dispatch = useDispatch()

    const { id } = useParams();

    const handleMovieSubmit = (values) => {
        if(id) {
            dispatch(editMovie(values, id));
            closeModal();
        }
        else {
            dispatch(addMovie(values));
            onClose();
        }
    }

    const validateMovie = Yup.object().shape({
        title: Yup.string().required("Title required"),
        genre: Yup.string().max(50, "Genre is too long").required("Genre required"),
        release_date: Yup.date().required("Release date required"),
        description: Yup.string().required("Description required"),
        image_url: Yup.string().url("Enter url"),
    });

    useEffect(() => {
        if(id) {
            setInitial({
                title: movie.title,
                genre: movie.genre,
                release_date: movie.release_date.slice(0, 10),
                description: movie.description,
                image_url: movie.image_url, 
            });
            setButtonText("Edit Movie");
        }
        else {
            setInitial({
                title: '',
                genre: '',
                release_date: '',
                description: '',
                image_url: '', 
            })
            setButtonText("Add Movie");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const [initial, setInitial] = useState({
        title: '',
        genre: '',
        release_date: '',
        description: '',
        image_url: '', 
    });
    const [buttonText, setButtonText] = useState('');

    return (
        <div className="movieForm">
            <Formik
            initialValues={initial}
            onSubmit={(values) => handleMovieSubmit(values)}
            enableReinitialize={true}
            validationSchema={validateMovie}
            >
                <Form className='form'>
                    <Field name="title" type="text" className="field" placeholder="Enter movie title"></Field>
                    <ErrorMessage component="div" name="title" className='errorMessage' />
                    <Field name="genre" type="text" className="field" placeholder="Enter movie genre"></Field>
                    <ErrorMessage component="div" name="genre" className='errorMessage' />
                    <Field name="release_date" type="date" className="field" ></Field>
                    <ErrorMessage component="div" name="release_date" className='errorMessage' />
                    <Field name="description" type="text" className="field" placeholder="Enter movie description"></Field>
                    <ErrorMessage component="div" name="description" className='errorMessage' />
                    <Field name="image_url" type="url" className="field" placeholder="Enter picture url"></Field>
                    <ErrorMessage component="div" name="image_url" className='errorMessage' />
                    <button type="submit">{buttonText}</button>
                </Form>
            </Formik>
        </div>
    )
}

export default MovieForm;