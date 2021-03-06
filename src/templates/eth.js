import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Overview from "../components/Overview";
const Layout = props => {
  return (
    <Fragment>
      <div>
        <div className="wrapper ">
          <div
            className="sidebar"
            data-color="purple"
            data-background-color="black"
            data-image="../assets/img/sidebar-2.jpg"
          >
            <Menu />
          </div>
          <div className="main-panel">
            <Header />
            <div className="mt-5">
              <div className="container-fluid">
                <div className="row"></div>
              </div>
            </div>
           
            {props.children}
          </div>
        </div>
      </div>

    </Fragment>
  );
};
export default function EthTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => (
        <Layout>
          <Component {...propsComponent} />
        </Layout>
      )}
    />
  );
}
