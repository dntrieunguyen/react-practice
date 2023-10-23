const initState = {
   search: '',
   status: 'All',
   priority: [],
};

const filterReducer = (state = initState, action) => {
   /*
     type: 'todoList/addTodo'
     payload: { id: 3, name: 'Learn Redux', complete: true, prority: 'Low' }
     */

   switch (action.type) {
      case 'filters/searchFilterChange':
         return {
            ...state,
            search: action.payload,
         };
      case 'filter/statusFilterChange':
         return {
            ...state,
            status: action.payload,
         };
      case 'filter/filterPriorityChange':
         return {
            ...state,
            priority: action.payload,
         };

      default:
         return state;
   }
};

export default filterReducer;
