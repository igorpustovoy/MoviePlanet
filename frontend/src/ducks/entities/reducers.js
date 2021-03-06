import * as _ from 'lodash';

const allEntities = [
    "people",
    "movies",
    "actors"
];

const defaultState = allEntities.reduce(
    (acc, entity) => ({
        ...acc,
        [entity]: {
            byId: {},
            allIds: []
        }
    }), {}
);

const entityReducer = (entity, state = { allIds: [], byId: {} }, action) => {
    // console.log('Before', entity, state, action);
    const actionEntities = action.payload[entity];
    // console.log('Entity', actionEntities);
    const { actionType } = action.meta;

    switch(actionType) {
        case 'GET_ALL':
            return {
                byId: {
                    ...Object.keys(actionEntities).reduce(
                        (acc, id) => ({
                            ...acc,
                            [id]: {
                                ...state.byId[id],
                                ...actionEntities[id]
                            }
                        })
                    , {}),
                },
                allIds: Object.keys(actionEntities)
            }
        case 'ADD_ENTITY':
            return {
                byId: {...state.byId, ...actionEntities},
                allIds: [...new Set([...state.allIds, ...Object.keys(actionEntities)])]
            }
        case 'DELETE_ENTITY':
            return {
                byId: _.omit(state.byId, ...Object.keys(actionEntities)),
                allIds: state.allIds.filter(id => !Object.keys(actionEntities).includes(id))
            }
        case 'EDIT_ENTITY':
            return {
                byId: {...state.byId, ...actionEntities},
                allIds: [...state.allIds]
            }
        default:
            return state;
    }
}


export const entities = (state = defaultState, action) => {
    if(!action.meta || !action.meta.actionType) return state;

    return {
        ...state,
        ...Object.keys(action.payload).reduce(
            (acc, entity) => ({
                ...acc,
                [entity]: entityReducer(entity, state[entity], action)
            }), {}
        ),
    }
}