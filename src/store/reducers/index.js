import { combineReducers } from 'redux';
import queries from './queries';
import form from './form';

const rootReducers = combineReducers({
  // add reducer files references here
  queries,
  form
});

export default rootReducers;
