import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "../components/Table/Table";
import Overview from "../components/Overview";
import sentEmail from "../Email/email"
class Home extends Component {
  render() {
    return (
      <div>
         <div className="row container-fluid mt-3">
              <Overview />
            </div>
        <div className="container">
          <Table />
          <button onClick={sentEmail()} className="btn btn-inf">GUI EMAIL </button>
        </div>
      </div>
    );
  }
}

export default connect()(Home);
