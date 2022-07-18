import { createAction } from "redux-api-middleware";
import types from "./types";
import { schema, normalize } from "normalizr";
import { findActorByMovieIdAndPersonId } from "./selectors";

const actorSchema = new schema.Entity("actors");
const actorsSchema = [actorSchema];
const defaultUrl = "https://movie-planet-backend.herokuapp.com";

export const getActors = () => {
  return createAction({
    endpoint: `${defaultUrl}/actors/`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    types: [
      types.ACTOR_LIST_REQUEST,
      {
        type: types.ACTOR_LIST_SUCCESS,
        payload: async (action, state, res) => {
          const json = await res.json();
          const { entities } = normalize(json, actorsSchema);
          return entities;
        },
        meta: { actionType: "GET_ALL" },
      },
      types.ACTOR_LIST_FAILURE,
    ],
  });
};

export const addActor = (movieId, person) => {
  return createAction({
    endpoint: `${defaultUrl}/movies/${movieId}/actors`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person),
    types: [
      types.ACTOR_ADD_REQUEST,
      {
        type: types.ACTOR_ADD_SUCCESS,
        payload: async (action, state, res) => {
          const { id } = await res.json();
          const newActor = { id, movie_id: movieId, person_id: person.id };
          const { entities } = normalize(newActor, actorSchema);
          return entities;
        },
        meta: { actionType: "ADD_ENTITY" },
      },
      types.ACTOR_ADD_FAILURE,
    ],
  });
};

export const deleteActor = (actorId, movieId) => {
  return createAction({
    endpoint: `${defaultUrl}/movies/${movieId}/actors/${actorId}`,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    types: [
      types.ACTOR_DELETE_REQUEST,
      {
        type: types.ACTOR_DELETE_SUCCESS,
        payload: async (action, state, res) => {
          const newActor = findActorByMovieIdAndPersonId(
            state,
            movieId,
            actorId
          );
          const { entities } = normalize(newActor, actorSchema);
          return entities;
        },
        meta: { actionType: "DELETE_ENTITY" },
      },
      types.ACTOR_DELETE_FAILURE,
    ],
  });
};
