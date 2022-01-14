import { createSlice, current } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState: any = {
  TodoList: [
    { text: 'Learn about React', id: `${1}` },
    { text: 'Meet friend for lunch', id: `${2}` },
  ],
};

export const todoListReducer = createSlice({
  name: 'TodoList',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add todo item ;
    addTodo: (state, { payload }) => {
      const todo = { text: payload, id: state.TodoList.length + 1 };
      state.TodoList.push(todo);
      console.log('testing');
      console.log(current(state.TodoList));
    },
    // delete todo item ;
    deleteTodo: (state, { payload }) => {
      const deletedTodoArray = state.TodoList.filter((todo: any) => {
        return todo.id !== payload;
      });
      state.TodoList = deletedTodoArray;
    },
  },
});

export const { addTodo, deleteTodo } = todoListReducer.actions;

export default todoListReducer.reducer;
