import React, { Component } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { actGetDashBroad } from "../Action/ApiETH";
import { connect } from "react-redux";
class Home extends Component {
  componentDidMount() {
    this.props.dispatch(actGetDashBroad());
  }
  render() {
    return (
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
            <div className="mt-5">
              <div className="container-fluid">
                <div className="row"></div>
              </div>
            </div>
            <div className="row container-fluid mt-3"></div>
            <div className="row">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Home);
