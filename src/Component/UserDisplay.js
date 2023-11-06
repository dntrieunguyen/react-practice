import React from 'react';

export default function UserDisplay({ userList }) {
   return (
      <>
         <div className="card">
            <div className="users">
               <ul>
                  {userList.map((item, index) => (
                     <li key={index}>
                        {item.name} ({item.age} years old)
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </>
   );
}
