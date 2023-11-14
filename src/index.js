import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CountProvider } from './context/CountProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <CountProvider>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </CountProvider>,
);

reportWebVitals();
