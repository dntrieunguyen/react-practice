import { useEffect, useState } from 'react';
import './App.scss';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import './components/style.scss';

// https://movies-lab-98948-default-rtdb.firebaseio.com/movie.json
function App() {
   const [data, setData] = useState([]);
   const [fetchDataFlag, setFetchDataFlag] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(
               'https://movies-lab-98948-default-rtdb.firebaseio.com/movie.json',
            );
            const data = await res.json();
            setData(Object.values(data));
         } catch (error) {
            console.log(error);
         }
      };

      if (fetchDataFlag) {
         fetchData();
         setFetchDataFlag(false);
      }
   }, [fetchDataFlag]);

   const handleOnClickFetchData = () => {
      setFetchDataFlag(true);
   };

   return (
      <>
         <Form></Form>
         <section>
            <button onClick={handleOnClickFetchData}>Fetch Movie</button>
         </section>
         <MovieDisplay data={data}></MovieDisplay>
      </>
   );
}

export default App;
