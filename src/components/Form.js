import React, { useState } from 'react';

export default function Form() {
   const [formData, setFormData] = useState({
      openingText: '',
      releaseDate: '',
      title: '',
   });

   const handleFormChange = e => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   };

   const handleClickAddBtn = async () => {
      //   console.log(formData);
      const { openingText, releaseDate, title } = formData;
      const moviePost = {
         openingText,
         releaseDate,
         title,
      };

      try {
         const res = await fetch(
            'https://movies-lab-98948-default-rtdb.firebaseio.com/movie.json',
            {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(moviePost),
            },
         );
         if (!res) {
            console.log('Lỗi Gửi');
         }
      } catch (error) {
         console.log(error);
      }

      setFormData({
         openingText: '',
         releaseDate: '',
         title: '',
      });
   };

   const { openingText, releaseDate, title } = formData;

   return (
      <>
         <section>
            <form className="control">
               <label name="title">Title</label>
               <input
                  name="title"
                  onChange={handleFormChange}
                  value={title}
                  type="text"
               />

               <label name="openingText">Opening Text</label>
               <textarea
                  name="openingText"
                  onChange={handleFormChange}
                  value={openingText}
                  type="text"
               />

               <label name="releaseDate">Release Date</label>
               <input
                  name="releaseDate"
                  onChange={handleFormChange}
                  value={releaseDate}
                  type="date"
               />
            </form>
            <button onClick={handleClickAddBtn}>Add Movie</button>
         </section>
      </>
   );
}
