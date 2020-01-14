import { combineReducers } from 'redux';

// calling the default reducer to create a link
import { queries } from './reducers/queries';

const rootReducers = combineReducers({
    // add reducer files references here
    queries
});

export default rootReducers;