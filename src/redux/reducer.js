const initState = {
   filters: {
      search: '',
      status: 'All',
      priority: [],
   },
   todoList: [
      { id: 1, name: 'Learn JS', complete: false, priority: 'Medium' },
      { id: 2, name: 'Learn React', complete: false, priority: 'High' },
      { id: 3, name: 'Learn Redux', complete: true, priority: 'Low' },
   ],
};

const rootReducer = (state = initState, action) => {
   /*
    type: 'todoList/addTodo'
    payload: { id: 3, name: 'Learn Redux', complete: true, prority: 'Low' }
    */

   switch (action.type) {
      case 'todoList/addTodo':
         return {
            ...state,
            todoList: [...state.todoList, action.payload],
         };

      default:
         return state;
   }
};

export default rootReducer;
