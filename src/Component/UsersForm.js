import React, { useState } from 'react';

export default function UsersForm({ setError, setUserList }) {
   const [user, setUser] = useState({
      name: '',
      age: '',
   });

   const handleOnChange = e => {
      const { name, value } = e.target;
      setUser(prev => ({ ...prev, [name]: value }));
   };

   const handleAddUserBtn = e => {
      //handle
      e.preventDefault();
      const updateUser = {
         name: user.name,
         age: +user.age,
      };
      console.log(updateUser);
      const userValidation = user => {
         const { name, age } = user;
         let isValid = true;

         if (name.trim().length === 0 || age === 0) {
            setError({
               title: 'Invalid Input',
               message:
                  'Please enter a valid name and age (non-empty values) !!!',
               isShowErrorModal: true,
            });
            isValid = false;
         }

         if (age < 0) {
            setError({
               title: 'Invalid Age',
               message: 'Please enter a age (age > 0)',
               isShowErrorModal: true,
            });
            isValid = false;
         }
         return isValid;
      };

      const isValid = userValidation(updateUser);
      if (isValid) {
         setUserList(prev => [...prev, updateUser]);
      }
   };

   return (
      <>
         {' '}
         <form className="card" action="">
            <div className="input">
               <label name="name" htmlFor="">
                  UserName
               </label>
               <input
                  value={user.name}
                  onChange={handleOnChange}
                  type="text"
                  name="name"
               />
            </div>
            <div className="input">
               <label htmlFor="" name="age">
                  Age (Years)
               </label>
               <input
                  value={user.age}
                  onChange={handleOnChange}
                  type="text"
                  name="age"
               />
            </div>
            <div className="input">
               <button onClick={handleAddUserBtn}>Add User</button>
            </div>
         </form>
      </>
   );
}
