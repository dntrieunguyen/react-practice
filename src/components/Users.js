import React, { Component } from 'react';
import './Users.scss';
import './User.scss';

export default class Users extends Component {
   constructor() {
      super();
      //state here
      this.state = {
         showUsers: true,
      };
   }
   handleShowUsers = () => {
      //hanlde
      this.setState({
         ...this.state,
         showUsers: !this.state.showUsers,
      });
   };

   // componentDidMount = () => {
   //    if (this.props.usersDisplayList.length === 0) {
   //       throw new Error('have no users');
   //    }
   // };

   render() {
      return (
         <div className="users">
            <button onClick={() => this.handleShowUsers()} className="">
               {!this.state.showUsers ? 'Show' : 'Hide'} Users
            </button>

            <ul>
               {this.state.showUsers &&
                  this.props.usersDisplayList.map(user => (
                     <li className="user" key={user.id}>
                        {user.name}
                     </li>
                  ))}
            </ul>
         </div>
      );
   }
}
