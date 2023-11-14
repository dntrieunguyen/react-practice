import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
   const param = useParams();

   return (
      <section className="grid grid-cols-3 gap-5 mx-auto w-[80%] my-5">
         <div
            aria-label="card-overlay"
            className="relative w-full cursor-pointer h-[300px]"
         >
            <img
               src="https://bit.ly/3zzCTUT"
               alt=""
               className="absolute object-cover w-full h-full rounded-lg"
            />
            <div className="absolute flex flex-col p-2 bg-white rounded bottom-5 left-5 right-5 gap-y-1">
               <h3 className="text-base font-bold">{param.id}</h3>
               <span className="text-sm text-gray-400">24 years old</span>
            </div>
         </div>
      </section>
   );
}

export default Detail;
