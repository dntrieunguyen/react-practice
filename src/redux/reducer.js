const initState = 0;

export const rootReducer = (state = initState, action) => {
   switch (action.type) {
      case 'INCREASE':
         return (state = action.payload);

      case 'DECREASE':
         return (state = action.payload);

      default:
         return state;
   }
};
