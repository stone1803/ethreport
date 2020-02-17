import React, { Component } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { actGetDashBroad, actGetWorkers } from "../Action/ApiETH";
import { connect } from "react-redux";
import Table from "../components/Table/Table";
class Home extends Component {
  componentDidMount() {
    this.props.dispatch(actGetDashBroad());
    this.props.dispatch(actGetWorkers());
  }
  render() {
    return (
      <div>
        <div className="container">
          <Table />
        </div>
      </div>
    );
  }
}

export default connect()(Home);
