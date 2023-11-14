export const initialState = {
   count: 0,
};

export const reducer = (state, action) => {
   console.log(action);
   switch (action.type) {
      case 'increase':
         // handle
         return {
            count: state.count + 1,
         };
      case 'decrease':
         // handle
         return {
            count: state.count - 1,
         };
      case 'update':
         // handle
         return {
            count: parseInt(action.payload),
         };

      default:
         return state;
   }
};
