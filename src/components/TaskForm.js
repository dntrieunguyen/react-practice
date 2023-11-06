import React from 'react';
import './style.scss';
export default function TaskForm({
   inputText,
   handleClickAddTaskBtn,
   handleInputTextChange,
}) {
   return (
      <>
         <section className="section">
            <form className="form">
               <input
                  value={inputText}
                  onChange={handleInputTextChange}
                  name="inputText"
                  type="text"
               />
               <button onClick={handleClickAddTaskBtn}>Add Task</button>
            </form>
         </section>
      </>
   );
}
