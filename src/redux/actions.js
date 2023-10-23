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

export const completedTodoChange = todoId => {
   return {
      type: 'todoList/completedTodoChange',
      payload: todoId,
   };
};

export const searchFilterChange = payload => {
   return {
      type: 'filters/searchFilterChange',
      payload: payload,
   };
};

export const statusFilterChange = payload => {
   return {
      type: 'filter/statusFilterChange',
      payload: payload,
   };
};

export const filterPriorityChange = payload => {
   return {
      type: 'filter/filterPriorityChange',
      payload: payload,
   };
};
