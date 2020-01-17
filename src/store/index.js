import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import ReduxPromise from 'redux-promise';

export default createStore(
    reducers,
    applyMiddleware(logger, ReduxPromise)
);
