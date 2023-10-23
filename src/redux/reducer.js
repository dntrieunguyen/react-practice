import { combineReducers } from 'redux';
import { filtersSlice } from '../components/Filters/filtersSlice';
import { todoListSlice } from '../components/TodoList/todoListSlice';

const rootReducer = combineReducers({
   filters: filtersSlice,
   todoList: todoListSlice,
});

export default rootReducer;
