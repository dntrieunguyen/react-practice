import { combineReducers } from 'redux';
import { filtersSlice } from '../components/Filters/filtersSlice';
import { todoListSlice } from '../components/TodoList/todoListSlice';

/* 
######## slice rootReducer => filterReducer && todoListReducer

const rootReducer = (state = initState, action) => {
   
    switch (action.type) {
      case 'todoList/addTodo':
         return {
            ...state,
            todoList: [
               ...state.todoList, 
               action.payload],
         };
      case 'filters/searchFilterChange':
         return {
            ...state,
            filters: {
               ...state,
               search: action.payload,
            },
         };

      default:
         return state;
   }
};
*/

// const rootReducer = (state = {}, action) => {
//    return {
//       filters: filterReducer(state.filters, action),
//       todoList: todoListReducer(state.todoList, action),
//    };
// };

const rootReducer = combineReducers({
   filters: filtersSlice,
   todoList: todoListSlice,
});

export default rootReducer;
