import { createAction } from "redux-api-middleware";
import types from "./types";
import { schema, normalize } from "normalizr";

const personSchema = new schema.Entity("people");
const peopleSchema = [personSchema];
const defaultUrl = "https://movie-planet-backend.herokuapp.com/persons";

export const getPeople = () => {
  return createAction({
    endpoint: `${defaultUrl}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    types: [
      types.PERSON_LIST_REQUEST,
      {
        type: types.PERSON_LIST_SUCCESS,
        payload: async (action, state, res) => {
          const json = await res.json();
          const { entities } = normalize(json, peopleSchema);
          return entities;
        },
        meta: { actionType: "GET_ALL" },
      },
      types.PERSON_LIST_FAILURE,
    ],
  });
};

export const addPerson = (personToAdd) => {
  return createAction({
    endpoint: `${defaultUrl}`,
    method: "POST",
    body: JSON.stringify(personToAdd),
    headers: {
      "Content-Type": "application/json",
    },
    types: [
      types.PERSON_ADD_REQUEST,
      {
        type: types.PERSON_ADD_SUCCESS,
        payload: async (action, state, res) => {
          const { id } = await res.json();
          const newPerson = { ...personToAdd, id };
          const { entities } = normalize(newPerson, personSchema);
          return entities;
        },
        meta: { actionType: "ADD_ENTITY" },
      },
      types.PERSON_ADD_FAILURE,
    ],
  });
};

export const deletePerson = (personToDelete) => {
  return createAction({
    endpoint: `${defaultUrl}/${personToDelete.id}`,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personToDelete),
    types: [
      types.PERSON_DELETE_REQUEST,
      {
        type: types.PERSON_DELETE_SUCCESS,
        payload: async (action, state, res) => {
          const { entities } = normalize(personToDelete, personSchema);
          return entities;
        },
        meta: { actionType: "DELETE_ENTITY" },
      },
      types.PERSON_DELETE_FAILURE,
    ],
  });
};

export const getPersonById = (personId) => {
  return createAction({
    endpoint: `${defaultUrl}/${personId}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    types: [
      types.PERSON_SINGLE_REQUEST,
      {
        type: types.PERSON_SINGLE_SUCCESS,
        payload: async (action, state, res) => {
          const json = await res.json();
          const { entities } = normalize(json, personSchema);
          return entities;
        },
        meta: { actionType: "ADD_ENTITY" },
      },
      types.PERSON_SINGLE_FAILURE,
    ],
  });
};

export const editPerson = (personToEdit, id) => {
  return createAction({
    endpoint: `${defaultUrl}/${id}`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personToEdit),
    types: [
      types.PERSON_EDIT_REQUEST,
      {
        type: types.PERSON_EDIT_SUCCESS,
        payload: async (action, state, res) => {
          const newPerson = { ...personToEdit, id };
          const { entities } = normalize(newPerson, personSchema);
          return entities;
        },
        meta: { actionType: "EDIT_ENTITY" },
      },
      types.PERSON_EDIT_FAILURE,
    ],
  });
};
