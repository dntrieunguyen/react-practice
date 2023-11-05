import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
   constructor() {
      super();
      this.state = {
         hasError: false,
      };
   }

   componentDidCatch = error => {
      console.log(error);
      this.setState({ hasError: true });
   };

   render() {
      if (this.state.hasError) {
         return (
            <div>
               <p>Something went wrong !!!</p>
            </div>
         );
      } else {
         return this.props.children;
      }
   }
}
