import { useState } from 'react';
import './App.scss';
import { useEffect } from 'react';

function App() {
   const [state, setState] = useState(false);
   const [data, setData] = useState([]);

   const handleChange = () => {
      setState(!state);
   };

   // https://jsonplaceholder.typicode.com/todos/1
   const url = 'https://jsonplaceholder.typicode.com/todos/1';

   useEffect(() => {
      const fetchData = async url => {
         try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
         } catch (error) {
            console.log(error);
         }
      };
      fetchData(url);
      console.log(data);
   }, [url]);
   useEffect(() => {
      return () => {};
   }, []);

   console.log(state);
   return (
      <>
         <button onClick={handleChange}>click</button>
      </>
   );
}

export default App;
