import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './reducer/counterSlice';
import { loginSlice } from './reducer/loginSlice';

export const store = configureStore({
   reducer: {
      counter: counterSlice.reducer,
      isLogin: loginSlice.reducer,
   },
});
