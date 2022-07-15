import { createAction } from "redux-api-middleware"
import types from "./types"
import { schema, normalize} from 'normalizr';


const movieSchema = new schema.Entity('movies');
const moviesSchema = [movieSchema];

export const getMovies = () => {
    return createAction({
        endpoint: 'http://localhost:5000/api/movies/',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.MOVIE_LIST_REQUEST,
            {
                type: types.MOVIE_LIST_SUCCESS,
                payload: async (action, state, res) => {
                    const json = await res.json();
                    const { entities } = normalize(json, moviesSchema);
                    return entities;
                },
                meta: { actionType: 'GET_ALL'}
            },
            types.MOVIE_LIST_FAILURE
        ]
    });
};

export const addMovie = (movieToAdd) => {
    return createAction({
        endpoint: 'http://localhost:5000/api/movies/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieToAdd),
        types: [
            types.MOVIE_ADD_REQUEST,
            {
                type: types.MOVIE_ADD_SUCCESS,
                payload: async (action, state, res) => {
                    const { id } = await res.json();
                    const newMovie = {...movieToAdd, id}
                    const { entities } = normalize(newMovie, movieSchema);
                    return entities;
                },
                meta: { actionType: 'ADD_ENTITY' }
            },
            types.MOVIE_ADD_FAILURE
        ]
    });
};

export const deleteMovie = (movieToDelete) => {
    return createAction({
        endpoint: `http://localhost:5000/api/movies/${movieToDelete.id}`,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieToDelete),
        types: [
            types.MOVIE_DELETE_REQUEST,
            {
                type: types.MOVIE_DELETE_SUCCESS,
                payload: async (action, state, res) => {
                    const { entities } = normalize(movieToDelete, movieSchema);
                    return entities;
                },
                meta: { actionType: 'DELETE_ENTITY' }
            },
            types.MOVIE_DELETE_FAILURE
        ]
    });
};

export const getMovieById = (movieId) => {
    return createAction({
        endpoint: `http://localhost:5000/api/movies/${movieId}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.MOVIE_SINGLE_REQUEST,
            {
                type: types.MOVIE_SINGLE_SUCCESS,
                payload: async (action, state, res) => {
                    const json = await res.json();
                    const { entities } = normalize(json, movieSchema);
                    return entities;
                },
                meta: { actionType: 'ADD_ENTITY'}
            },
            types.MOVIE_SINGLE_FAILURE
        ]
    });
};

export const editMovie = (movieToEdit, id) => {
    return createAction({
        endpoint: `http://localhost:5000/api/movies/${id}`,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieToEdit),
        types: [
            types.MOVIE_EDIT_REQUEST,
            {
                type: types.MOVIE_EDIT_SUCCESS,
                payload: async (action, state, res) => {
                    const newMovie = {...movieToEdit, id}
                    const { entities } = normalize(newMovie, movieSchema);
                    return entities;
                },
                meta: { actionType: 'EDIT_ENTITY' }
            },
            types.MOVIE_EDIT_FAILURE
        ]
    });
};

export const addDirector = (director, movie) => {
    return createAction({
        endpoint: `http://localhost:5000/api/movies/${movie.id}/director`,
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(director),
        types: [
            types.MOVIE_ADD_DIRECTOR_REQUEST,
            {
                type: types.MOVIE_ADD_DIRECTOR_SUCCESS,
                payload: async (action, state, res) => {
                    const newMovie = {...movie, director_id: director.id}
                    const { entities } = normalize(newMovie, movieSchema);
                    return entities;
                },
                meta: { actionType: 'EDIT_ENTITY' }
            },
            types.MOVIE_ADD_DIRECTOR_FAILURE
        ]
    });
};

export const deleteCurrentDirector = (director, movie) => {
    return createAction({
        endpoint: `http://localhost:5000/api/movies/${movie.id}/director`,
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(director),
        types: [
            types.MOVIE_DELETE_DIRECTOR_REQUEST,
            {
                type: types.MOVIE_DELETE_DIRECTOR_SUCCESS,
                payload: async (action, state, res) => {
                    const newMovie = {...movie, director_id: null}
                    const { entities } = normalize(newMovie, movieSchema);
                    return entities;
                },
                meta: { actionType: 'EDIT_ENTITY' }
            },
            types.MOVIE_DELETE_DIRECTOR_FAILURE
        ]
    });
};