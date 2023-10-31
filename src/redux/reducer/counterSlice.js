import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
   name: 'count',
   initialState: {
      count: 0,
      isToggle: false,
   },
   reducers: {
      increment: (state, action) => {
         //handle
         state.count += 1;
      },
      increment_10: (state, action) => {
         //handle
         state.count += 10;
      },
      decrement: (state, action) => {
         //handle
         if (state.count > 0) {
            state.count -= 1;
         }
      },
      toggle: (state, action) => {
         state.isToggle = !state.isToggle;
      },
   },
});
