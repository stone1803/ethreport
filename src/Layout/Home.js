import React, { Component } from "react";
import { actGetDashBroad, actGetWorkers, actGetWhatToMine } from "../Action/ApiETH";
import { connect } from "react-redux";
import Table from "../components/Table/Table";
import { ethConvertUSD,Top10Coin } from "../components/Coinmarketcap";
import Overview from "../components/Overview";
import sentEmail from "../Email/email"
class Home extends Component {
  async componentDidMount() {
    this.props.dispatch(actGetDashBroad());
    this.props.dispatch(actGetWorkers());
    this.props.dispatch(actGetWhatToMine())
    this.props.dispatch(ethConvertUSD())
    this.props.dispatch(Top10Coin())

  }
  render() {
    return (
      <div>
         <div className="row container-fluid mt-3">
              <Overview />
            </div>
        <div className="container">
          <Table />
        </div>
      </div>
    );
  }
}

export default connect()(Home);
