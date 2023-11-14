import React, { useEffect, useState } from 'react';

function Calendar() {
   const [count, setCount] = useState(0);

   const onIncrease = e => {
      e.preventDefault();
      setCount(count + 1);
   };

   const onDecrease = e => {
      e.preventDefault();
      setCount(count - 1);
   };

   const url =
      'https://movies-lab-98948-default-rtdb.firebaseio.com/movie.json';

   const useFetch = () => {
      const [data, setData] = useState(null);

      useEffect(() => {
         const fetchData = async () => {
            try {
               const res = await fetch(url);
               const jsonData = await res.json();
               setData(jsonData);
            } catch (error) {
               console.log(error);
            }
         };

         fetchData();
      }, [url]);

      return data;
   };

   return (
      <div className="w-[600px] mx-auto my-10">
         <form>
            <div className="flex flex-col items-start gap-y-3">
               <input
                  value={count}
                  onChange={e => setCount(parseInt(e.target.value))}
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

export default Calendar;
