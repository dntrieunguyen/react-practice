import {
   createBrowserRouter,
   Navigate,
   RouterProvider,
} from 'react-router-dom';
import './App.scss';
import QuotePage from './components/QuotePage';

import DetailQuote from './components/DetailQuote';
import NewQuote from './components/NewQuote';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Navigate to="/quotes"></Navigate>,
   },
   {
      path: '/quotes',
      element: <QuotePage></QuotePage>,
   },
   {
      path: '/quotes/:quoteId',
      element: <DetailQuote></DetailQuote>,
   },
   {
      path: '/new-quote',
      element: <NewQuote></NewQuote>,
   },
]);

function App() {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
