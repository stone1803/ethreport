import React, { Component } from "react";
import { actGetDashBroad, actGetWorkers, actGetWhatToMine } from "../Action/ApiETH";
import { connect } from "react-redux";
import Table from "../components/Table/Table";
class Home extends Component {
  async componentDidMount() {
    this.props.dispatch(actGetDashBroad());
    this.props.dispatch(actGetWorkers());
    this.props.dispatch(actGetWhatToMine())
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
