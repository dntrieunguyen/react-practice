import React, { Component } from 'react';
import './UserFinder.scss';
export default class UserFinder extends Component {
   render() {
      return (
         <div className="finder">
            <input
               value={this.props.valueInput}
               onChange={e => this.props.handleInputChange(e)}
               type="text"
               className="border-2"
            />
         </div>
      );
   }
}
