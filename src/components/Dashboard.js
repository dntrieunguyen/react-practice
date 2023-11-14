import React, { useContext } from 'react';

import { CountContext } from '../context/CountContext';

function Dashboard() {
   const [state, dispatch] = useContext(CountContext);

   const onIncrease = e => {
      e.preventDefault();
      dispatch({ type: 'increase' });
   };
   const onDecrease = e => {
      e.preventDefault();
      dispatch({ type: 'decrease' });
   };

   const handleOnChange = e => {
      dispatch({ type: 'update', payload: e.target.value });
   };

   return (
      <div className="w-[600px] mx-auto my-10">
         <form>
            <div className="flex flex-col items-start gap-y-3">
               <input
                  value={state.count}
                  onChange={handleOnChange}
                  type="number"
                  className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
               />
            </div>

            <div className="flex gap-5 my-5">
               <button
                  onClick={onIncrease}
                  className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
               >
                  Increase
               </button>

               <button
                  onClick={onDecrease}
                  className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
               >
                  Decrease
               </button>
            </div>
         </form>
      </div>
   );
}

export default Dashboard;
