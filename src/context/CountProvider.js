import { useReducer } from 'react';
import { initialState, reducer } from './reducer';
import { CountContext } from './CountContext';

export const CountProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   return (
      <CountContext.Provider value={[state, dispatch]}>
         {children}
      </CountContext.Provider>
   );
};
