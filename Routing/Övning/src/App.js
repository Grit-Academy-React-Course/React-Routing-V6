import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/one">Exercise One</NavLink>
            </li>
            <li>
              <NavLink to="/two">Exercise Two</NavLink>
            </li>
            <li>
              <NavLink to="/three">Exercise Three</NavLink>
            </li>
          </ul>
        </nav>
      </Fragment>
    )
  }
}

export default App;