import React from 'react';

export default function ErrorModal({ setError, error }) {
   const handleClickOkBtn = () => {
      setError({
         title: '',
         message: '',
         isShowErrorModal: false,
      });
   };
   return (
      <>
         <div className="backdrop">
            <div className="modal">
               <div className="header">
                  <h2>{error.title}</h2>
               </div>
               <div className="content">{error.message}</div>
               <div className="flex justify-end aciton">
                  <button onClick={handleClickOkBtn} className="mb-2 me-2">
                     Okay
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
