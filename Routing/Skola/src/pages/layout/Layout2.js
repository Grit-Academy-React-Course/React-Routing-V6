import React, { Fragment } from "react";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { Outlet } from "react-router-dom";

class Layout2 extends React.Component {

    render() {
        return (
            <Fragment>
                <Footer></Footer>
                <Outlet />
                <Header></Header>
            </Fragment>
        )
    }
}

export default Layout2;