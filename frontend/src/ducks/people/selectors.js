export const getAllPeople = (state) => {
    return state.entities.people.allIds.map(id => state.entities.people.byId[id]);
}

export const getPersonById = (state, id) => {
    return state.entities.people.allIds.map(id => state.entities.people.byId[id])
    .find(person => parseInt(person.id) === parseInt(id));
}

export const getAllPersonNationalities = (state) => {
    const allNationalities =  state.entities.people.allIds.map(id => state.entities.people.byId[id])
    .reduce((acc, curr) => {
        return [...acc, curr.nationality]
    }, []);

    return [...new Set(allNationalities)];
}

export const getAllPersonIds = (state) => {
    return state.entities.people.allIds;
}