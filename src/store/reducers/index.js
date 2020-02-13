import { combineReducers } from 'redux';
import queries from './queries';
import form from './form';
import general from './general';

const rootReducers = combineReducers({
  // add reducer files references here
  queries,
  form,
  general
});

export default rootReducers;
