import { useEffect, useState } from 'react';

export const useFetch = url => {
   //handle
   const [data, setData] = useState([]);
   const [flagFetch, setFlagFetch] = useState(true);
   // Fetch data
   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(url);
            const data = await res.json();
            setData(Object.values(data));
         } catch (error) {
            console.log(error);
         }
      };
      if (flagFetch) {
         fetchData();
         setFlagFetch(false);
      }
   }, [flagFetch]);
   return {
      data,
      setFlagFetch,
   };
};
