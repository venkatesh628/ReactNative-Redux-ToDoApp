import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../redux/actions/todos';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
