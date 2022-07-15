export const getAllActors = (state) => {
    return state.entities.actors.allIds.map(id => state.entities.actors.byId[id]);
}

export const getAllActorsForMovieId = (state, movieId) => {
    const personIds = state.entities.actors.allIds
    .map(id => state.entities.actors.byId[id])
    .reduce((acc, curr) => {
        if(parseInt(curr.movie_id) === parseInt(movieId)) {
            return [...acc, curr.person_id];
        }
        return acc;
    }, []);

    return personIds.map(personId => state.entities.people.byId[personId]);
}

export const getAllMoviesActedIn = (state, personId) => {
    const movieIds = state.entities.actors.allIds
    .map(id => state.entities.actors.byId[id])
    .reduce((acc, curr) => {
        if(parseInt(curr.person_id) === parseInt(personId)) {
            return [...acc, curr.movie_id];
        }
        return acc;
    }, []);

    return movieIds.map(movieId => state.entities.movies.byId[movieId]);
}

export const findActorByMovieIdAndPersonId = (state, movieId, personId) => {
    return state.entities.actors.allIds
    .map(id => state.entities.actors.byId[id])
    .find(actor => parseInt(actor.movie_id) === parseInt(movieId) && parseInt(actor.person_id) === parseInt(personId))
}