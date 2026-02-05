/*
 * FILE: About.componenet.js
 * ROLE: About page: shows project title and two user cards (functional User and class-based UserClass)
 *       to compare both patterns. Used as the "/About" route child in food.js (lazy-loaded with Suspense).
 *       Solves: demo of functional vs class components in one screen; no props received from router.
 */

import React from "react";
import User from "./user.component.js";
import UserClass from "./UserClass.component.js";
import UserContext from "./utils/UserContext.js";

/*
 * Class component: extends React.Component so we get this.props, this.state, and lifecycle methods.
 * No constructor here: we don't need to set initial state or bind methods; we could add constructor(props)
 * { super(props); this.state = {...} } if we had state. render() is required and returns JSX.
 */
class About extends React.Component {
  render() {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">About</h1>

        <h2 className="text-xl text-gray-700 mb-6">
          This is Namaste React Swiggy project
        </h2>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>

        {/* Functional Component */}
        <User
          name="Tushal Lohar (Function)"
          location="Dehradun"
        />

        {/* Class Component */}
        <UserClass
          name="Tushal Lohar (Class)"
          loc="Mumbai"
        />
      </div>
    );
  }
}

export default About;
