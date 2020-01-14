import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import ReduxPromise from 'redux-promise';

export const store = createStore(
    reducers,
    applyMiddleware(logger, ReduxPromise)
);
