import React from 'react';

export default function MovieDisplay({ data }) {
   //    console.log(data);
   return (
      <>
         <section>
            {data.map((item, index) => (
               <div key={index} className="movie">
                  <h2>{item.title}</h2>
                  <h3>{item.releaseDate}</h3>
                  <p className="movies-list">{item.openingText}</p>
               </div>
            ))}
         </section>
      </>
   );
}
