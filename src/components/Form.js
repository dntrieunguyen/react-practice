import React, { useState } from 'react';

export default function Form({
   handleChangeTitle,
   handleChangeAmount,
   handleChangeDate,
   handleAddNewExpense,

   expense,
}) {
   const [isShowForm, setIsShowForm] = useState(false);
   const handleCancelBtn = e => {
      e.preventDefault();
      setIsShowForm(!isShowForm);
   };

   return (
      <>
         <form className="extenseForm">
            {isShowForm && (
               <div className="expandForm">
                  <div className="inputField">
                     {/* Title */}
                     <div className="formInput">
                        <label
                           htmlFor=""
                           className="inputTitle"
                           name="txtTitle"
                        >
                           Title
                        </label>
                        <input
                           value={expense?.title}
                           onChange={handleChangeTitle}
                           type="text"
                           name="txtTitle"
                           className="txtTitle"
                        />
                     </div>
                     {/* Amount */}
                     <div className="formInput">
                        <label
                           htmlFor=""
                           className="inputTitle"
                           name="txtAmount"
                        >
                           Amount
                        </label>
                        <input
                           value={expense?.amount}
                           onChange={handleChangeAmount}
                           type="number"
                           name="txtAmount"
                           className="txtAmount"
                           min={0}
                           step={0.01}
                        />
                     </div>
                     {/* Date */}
                     <div className="formInput">
                        <label htmlFor="" className="inputTitle" name="txtDate">
                           Date
                        </label>
                        <input
                           value={expense?.date}
                           onChange={handleChangeDate}
                           type="date"
                           name="txtDate"
                           className="txtDate"
                        />
                     </div>
                  </div>
                  {/* Button Add */}
                  <button onClick={handleAddNewExpense} className="formBtn">
                     Add Expense
                  </button>
                  {/* Button cancel */}
                  <button onClick={handleCancelBtn} className="formBtnCancel">
                     Cancel
                  </button>
               </div>
            )}
            {
               <button onClick={handleCancelBtn} className="formBtnExpand">
                  Add New Expense
               </button>
            }
         </form>
      </>
   );
}
