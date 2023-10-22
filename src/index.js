import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

function todos(state = [], action) {
   switch (action.type) {
      case 'ADD_TODO':
         return state.concat([action.text]);
      default:
         return state;
   }
}

const store = createStore(todos, ['Use Redux']);

store.dispatch({
   type: 'ADD_TODO',
   text: 'Read the docs',
});

console.log(store.getState());
// [ 'Use Redux', 'Read the docs' ]

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <Provider store={store}>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </Provider>,
);

reportWebVitals();
