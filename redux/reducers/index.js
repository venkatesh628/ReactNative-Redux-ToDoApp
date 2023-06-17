import { combineReducers } from 'redux';
import todosReducer from '../actions/todos';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;