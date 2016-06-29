import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import todos from './todo'

const rootReducer = combineReducers({
  todos,
  routing
});

export default rootReducer;
