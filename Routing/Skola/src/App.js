import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Fragment>
        <h1>I'm App.js</h1>
        {/* <a href="/admin">Admin</a> */}
        <ul>
          <li>
            <NavLink to="/admin">Admin</NavLink> {/* With navlink we can navigate to other routes. It works as an <a> but with NavLink, no page refresh occurs */}
          </li>
          <li>
            <NavLink to="/asdfsad">NotFound</NavLink>
          </li>
          <li>
            <NavLink to="/login">LogIn</NavLink>
          </li>
        </ul>
      </Fragment>
    )
  }
}

export default App;