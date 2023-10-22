// export const addTodoAction = {
//    type: 'todoList/addTodo',
//    payload: { id: 3, name: 'Learn Redux', complete: true, prority: 'Low' },
// };

// action creator => function
export const addTodo = payload => {
   return {
      type: 'todoList/addTodo',
      payload: payload,
   };
};
