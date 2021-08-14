import { configureStore } from '@reduxjs/toolkit';

import TodoList from '../Reducers/TodoReducer';



const store = configureStore({
    reducer: {
        todos: TodoList
    }
})



export default store ;