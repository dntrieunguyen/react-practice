import React, { Component } from 'react';

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
         name: '',
         password: '',
      };
      this.user = {
         name: '',
         password: '',
      };
   }

   onChangeInputText = e => {
      const { name, value } = e.target;
      this.setState(state => ({ ...state, [name]: value }));
   };

   onChangeUser = e => {
      const { name, value } = e.target;
      this.setUser(state => ({ ...state, [name]: value }));
      console.log(e);
   };

   render() {
      return (
         <>
            <form action="">
               <div>
                  <label htmlFor="" name="name">
                     Name
                  </label>
                  <input
                     type="text"
                     name="name"
                     value={this.state.name}
                     onChange={this.onChangeInputText}
                  />
               </div>
               <div>
                  <label htmlFor="" name="password">
                     password
                  </label>
                  <input
                     type="password"
                     name="password"
                     value={this.state.password}
                     onChange={this.onChangeInputText}
                  />
               </div>
            </form>
            {/* <div>
               <label htmlFor="" name="count"></label>
               <input
                  name="count"
                  onChange={e => this.onChangeInputText(e)}
                  value={this.state.count}
                  type="number"
               />
               <button onClick={this.onIncrease}>+</button>
               <button onClick={this.onDecrease}>-</button>
            </div> */}
         </>
      );
   }
}
