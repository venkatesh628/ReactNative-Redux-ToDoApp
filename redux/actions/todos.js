import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

// Load todos from AsyncStorage
AsyncStorage.getItem('todos')
  .then((jsonTodos) => JSON.parse(jsonTodos) || [])
  .then((todos) => initialState.push(...todos))
  .catch((error) => console.error('Error loading todos:', error));

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      AsyncStorage.setItem('todos', JSON.stringify(state));
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        AsyncStorage.setItem('todos', JSON.stringify(state));
      }
    },
    updateTodo: (state, action) => {
      const { id, description, completed } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.description = description;
        todo.completed = completed;
        AsyncStorage.setItem('todos', JSON.stringify(state));
      }
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        AsyncStorage.setItem('todos', JSON.stringify(state));
      }
    }
  },
});

export const { addTodo, toggleTodo, updateTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
