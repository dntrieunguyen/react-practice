import React from 'react';
import './style.scss';
export default function Tasks({ data }) {
   return (
      <>
         <section className="section">
            <div className="container">
               <ul>
                  {data.map((item, index) => (
                     <li key={index} className="task">
                        {item.content}
                     </li>
                  ))}

                  {/* <li className="task">No tasks found. Start adding some !</li> */}
               </ul>
            </div>
         </section>
      </>
   );
}
