import React from 'react';
import './components/Layout/Header.scss';

const App = () => {
   return (
      <>
         <header className="header">
            <div className="button">hello</div>
            <div className="icon">icon</div>
            <div className="badge">badge</div>
         </header>
         <div className="main-image">
            <img src={require('./assets/meals.jpg')} alt="" />
         </div>
      </>
   );
};

export default App;
