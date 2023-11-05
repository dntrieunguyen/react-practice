import './App.scss';

import React, { Component } from 'react';
import UserFinder from './components/UserFinder';
import Users from './components/Users';
import ErrorBoundary from './components/ErrorBoundary';

const DUMMY_USERS = [
   { id: 'u1', name: 'Max' },
   { id: 'u2', name: 'Manuel' },
   { id: 'u3', name: 'Julie' },
];
export default class App extends Component {
   constructor() {
      super();
      this.state = {
         usersList: DUMMY_USERS,
         filteredUsers: [],
         searchTerm: '',
      };
   }

   handleInputChange = e => {
      //handle
      const value = e.target.value;
      this.setState({
         ...this.state,
         searchTerm: value,
      });
   };

   componentDidMount = () => {
      this.setState({
         filteredUsers: DUMMY_USERS,
      });
   };

   componentDidUpdate(prevProps, prevState) {
      if (this.state.searchTerm !== prevState.searchTerm) {
         const updateUserList = DUMMY_USERS.filter(user =>
            user.name.includes(this.state.searchTerm),
         );
         this.setState({ filteredUsers: updateUserList });
      }
   }

   render() {
      console.log(this.state.filteredUsers);
      return (
         <>
            <UserFinder
               handleInputChange={this.handleInputChange}
               valueInput={this.state.searchTerm}
            ></UserFinder>
            <ErrorBoundary>
               <Users usersDisplayList={this.state.filteredUsers}></Users>
            </ErrorBoundary>
         </>
      );
   }
}
