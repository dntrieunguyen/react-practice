const initState = {
   count: 0,
};

export const rootReducer = (state = initState, action) => {
   switch (action.type) {
      case 'INCREASE':
         return {
            ...state,
            count: state.count + 1,
         };

      case 'DECREASE':
         return {
            ...state,
            count: state.count - 1,
         };

      default:
         return state;
   }
};
