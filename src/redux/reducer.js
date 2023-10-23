import { combineReducers } from 'redux';
import filterReducer from '../components/Filters/filtersSlice';
import todoListReducer from '../components/TodoList/todolistSlice';

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
   filters: filterReducer,
   todoList: todoListReducer,
});

export default rootReducer;
