import { useState } from 'react';
import './App.scss';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import './components/style.scss';
import { useFetch } from './hooks/useFetch';

function App() {
   const [inputText, setInputtext] = useState('');

   const { data, setFlagFetch } = useFetch(
      'https://todo-list-lab-7a557-default-rtdb.asia-southeast1.firebasedatabase.app/todo-list.json',
   );

   const handleInputTextChange = e => {
      const { value } = e.target;
      setInputtext(value);
   };

   const handleClickAddTaskBtn = async e => {
      e.preventDefault();
      const todoSubmit = {
         content: inputText,
      };

      try {
         const res = await fetch(
            'https://todo-list-lab-7a557-default-rtdb.asia-southeast1.firebasedatabase.app/todo-list.json',
            {
               headers: { 'Content-Type': 'application/json' },
               method: 'POST',
               body: JSON.stringify(todoSubmit),
            },
         );

         if (!res) {
            console.log('Error of sending data');
         }
      } catch (error) {
         console.log(error);
      }

      setFlagFetch(true);
      setInputtext('');
   };

   return (
      <>
         {' '}
         <TaskForm
            inputText={inputText}
            handleInputTextChange={handleInputTextChange}
            handleClickAddTaskBtn={handleClickAddTaskBtn}
         ></TaskForm>
         <Tasks data={data}></Tasks>
      </>
   );
}

export default App;
