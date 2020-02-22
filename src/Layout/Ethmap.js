import React, { Component } from "react";
import { connect } from "react-redux";

class Ethmap extends Component {
  renderWokers = () => {
    let { workers } = this.props;
    return workers.map((item, index) => {
      if ((item.currentHashrate / 100000).toFixed(0) < 100) {
        return (
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6" key="index">
            <div className="card card-stats">
              <div className="card-header card-header-danger card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">payment</i>
                </div>
                <p className="card-category">{item.worker}</p>
                <h3 className="card-title">
                  {(item.currentHashrate / 1000000).toFixed(0)} / MHZ
                </h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">date_range</i> Last 24 Hours
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-success card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">payment</i>
                </div>
                <p className="card-category">{item.worker}</p>
                <h3 className="card-title">
                  {(item.currentHashrate / 1000000).toFixed(0)} / MHZ
                </h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">date_range</i> Last 24 Hours
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  };
  thongbaoETH = () => {
    let { workers } = this.props;
    return workers.map((item, index) => {
      if ((item.currentHashrate / 1000000).toFixed(0) < 100) {
        return <span className="pl-2">{item.worker}</span>;
      }
    });
  };
  render() {
    let { workers } = this.props;
    if (workers) {
      return (
        <div>
          <div className="container mt-3">
            <p className="text-danger">
              Những máy đã OFF: {this.thongbaoETH()}{" "}
            </p>
          </div>
          <div className="row container">{this.renderWokers()}</div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
const mapStateToProps = state => ({
  workers: state.ListDataETH.Workers
});
export default connect(mapStateToProps, null)(Ethmap);
