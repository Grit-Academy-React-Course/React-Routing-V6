import React, { Fragment } from "react";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { Outlet } from "react-router-dom";

class Layout extends React.Component {

  render() {
    return (
      <Fragment>
        <Header></Header>
        <Outlet /> {/* All children route ska hamna här med hjälp av outlet component. Which means that all children routes will have header and footer as defined in this layout */}
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default Layout;