import { combineReducers } from 'redux';

// calling the default reducer to create a link
import defaults from './defaults';

const rootReducers = combineReducers({
    // add reducer files references here
    defaults
});

export default rootReducers;