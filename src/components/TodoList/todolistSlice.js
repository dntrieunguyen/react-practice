import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
   name: 'todoList',

   initialState: [
      { id: 1, name: 'Learn JS', completed: false, priority: 'Medium' },
      { id: 2, name: 'Learn React', completed: false, priority: 'High' },
      { id: 3, name: 'Learn Redux', completed: true, priority: 'Low' },
      //
   ],

   reducers: {
      addTodo: (state, action) => {
         state.push(action.payload);
      },

      completedTodoChange: (state, action) => {
         const updateTodoList = state.find(todo => (todo.id = action.payload));
         if (updateTodoList) {
            updateTodoList.completed = !updateTodoList.completed;
         }
      },
   },
});
