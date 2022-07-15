import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import { createMiddleware } from 'redux-api-middleware';
import logger from 'redux-logger';
import { entities } from './entities/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({
    entities: entities,
})

const store = createStore(combinedReducers,
     composeEnhancers(applyMiddleware(thunk, createMiddleware(), logger))
     );

export default store