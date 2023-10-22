const initState = {
   value: 0,
};

export const rootReducer = (state = initState, action) => {
   switch (action.type) {
      case 'INCREASE':
         return {
            ...state.value,
         };

      default:
         return state;
   }
};
