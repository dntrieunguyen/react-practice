import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
   name: 'login',
   initialState: {
      isLogin: false,
   },
   reducers: {
      LOGIN: (state, action) => {
         //handle
         state.isLogin = true;
      },
      LOGOUT: (state, action) => {
         //handle
         state.isLogin = false;
      },
   },
});
