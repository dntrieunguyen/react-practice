import { createSelector } from '@reduxjs/toolkit';

// export const todoListSelector = state => {
//    const searchInput = filterListSelector(state);

// //    const todoRemaining = state.todoList.filter(todo =>
// //       todo.name.includes(searchInput),
// //    );
// //    return todoRemaining;
// };
export const todoListSelector = state => state.todoList;

export const filterListSelector = state => state.filters.search;

export const statusFilterSelector = state => state.filters.status;

export const filterPrioritySelector = state => state.filters.priority;

export const todoReaminingSelector = createSelector(
   todoListSelector,
   filterListSelector,
   statusFilterSelector,
   filterPrioritySelector,

   (todoList, searchInput, status, priority) => {
      return todoList.filter(todo => {
         if (status === 'All') {
            return priority.length
               ? todo.name.includes(searchInput) &&
                    priority.includes(todo.priority)
               : todo.name.includes(searchInput);
         }

         return (
            todo.name.includes(searchInput) &&
            (status === 'Completed' ? todo.completed : !todo.completed) &&
            (priority.length ? priority.includes(todo.priority) : true)
         );
      });
   },
);
