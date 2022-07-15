export const getAllMovies = (state) => {
    return state.entities.movies.allIds.map(id => state.entities.movies.byId[id]);
}

export const getMovieById = (state, id) => {
    return state.entities.movies.allIds.map(id => state.entities.movies.byId[id])
    .find(movie => parseInt(movie.id) === parseInt(id));
}

export const getAllMovieGenres = (state) => {
    const allGenres =  state.entities.movies.allIds.map(id => state.entities.movies.byId[id])
    .reduce((acc, curr) => {
        return [...acc, curr.genre]
    }, []);

    return [...new Set(allGenres)];
}

export const getAllMoviesFromResponse = (res) => {
    return Object.keys(res.movies).map(id => res.movies[id]);
}

export const getAllMovieIds = (state) => {
    return state.entities.movies.allIds;
}

export const getAllMoviesDirectedBy = (state, directorId) => {
    return state.entities.movies.allIds.map(id => state.entities.movies.byId[id]).reduce(
        (acc, curr) => {
            if(curr.director_id === parseInt(directorId)) {
                return [...acc, curr];
            }
            return acc;
        }, []);
}

export const getMovieDirector = (state) => {
    return state.entities.movies.allIds.map(id => state.entities.movies.byId[id]);
}