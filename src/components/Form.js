import React from 'react';

export default function Form() {
   return (
      <>
         <section>
            <form className="control">
               <label>Title</label>
               <input type="text" />

               <label>Opening Text</label>
               <textarea type="text" />

               <label>Release Date</label>
               <input type="text" />
            </form>
            <button>Add Movie</button>
         </section>
      </>
   );
}
