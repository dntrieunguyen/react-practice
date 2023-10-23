const initState = [
   { id: 1, name: 'Learn JS', completed: false, priority: 'Medium' },
   { id: 2, name: 'Learn React', completed: false, priority: 'High' },
   { id: 3, name: 'Learn Redux', completed: true, priority: 'Low' },
];

const todoListReducer = (state = initState, action) => {
   /*
     type: 'todoList/addTodo'
     payload: { id: 3, name: 'Learn Redux', complete: true, prority: 'Low' }
     */

   switch (action.type) {
      case 'todoList/addTodo':
         return [...state, action.payload];

      case 'todoList/completedTodoChange':
         return state.map(todo =>
            todo.id === action.payload
               ? { ...todo, completed: !todo.completed }
               : todo,
         );

      default:
         return state;
   }
};

export default todoListReducer;
