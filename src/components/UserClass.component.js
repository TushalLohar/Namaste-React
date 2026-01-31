/*
 * FILE: UserClass.component.js
 * ROLE: Class-component version of a user card: shows count, count2, name, loc, and a button that
 *       updates state via setState. Used only on the About page next to User to compare class vs
 *       function components. Receives name and loc as props. Solves: demo of class state and
 *       setState; constructor sets initial state; render reads this.props and this.state.
 */

import React from "react";

class UserClass extends React.Component {
  // Constructor: required when we need initial state (or to bind methods). Must call super(props)
  // so this.props is set; then we set this.state. Without constructor we could use class fields
  // (state = {...}) in modern React.
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      count2: 10,
    };
  }

  render() {
    const { name } = this.props;
    const { count2 } = this.state;

    return (
      <div className="p-2.5 border border-gray-800 rounded-lg mb-4">
        <h1 className="text-lg font-semibold">Count :{this.state.count}</h1>
        <h1 className="text-lg font-semibold">Count2 :{count2}</h1>
        <button
          className="mt-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 cursor-pointer transition-colors"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: count2 * this.state.count,
            });
          }}
        >
          Count increment
        </button>

        <h2 className="text-base mt-2">Name:{name}</h2>
        <h3 className="text-base">Location:{this.props.loc}</h3>
        <h4 className="text-sm text-gray-600">Contact :@Tushal_loahr</h4>
      </div>
    );
  }
}
export default UserClass;
