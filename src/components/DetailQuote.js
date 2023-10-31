import React from 'react';
import { useParams } from 'react-router';

export default function DetailQuote() {
   const param = useParams();
   console.log(param);
   return (
      <div>
         <h2>Quote Page Detail</h2>
         <p>{param.quoteId}</p>
      </div>
   );
}
