import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
class Overview extends Component {
  render() {
    let { currentStatistics } = this.props;
    console.log(currentStatistics);
    if (currentStatistics) {
      return (
        <div class="row container-fluid mt-3">
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-warning card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">computer</i>
                </div>
                <p class="card-category">Tổng Trâu</p>
                <h3 class="card-title">{currentStatistics.activeWorkers}</h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">local_offer</i> Tracked from Github
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-danger card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">computer</i>
                </div>
                <p class="card-category">Trâu Off</p>
                <h3 class="card-title">0</h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">local_offer</i> Tracked from Github
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-info card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">computer</i>
                </div>
                <p class="card-category">Trâu On</p>
                <h3 class="card-title">{currentStatistics.activeWorkers}</h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">local_offer</i> Tracked from Github
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-success card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">payment</i>{" "}
                </div>
                <p class="card-category">Chưa Thanh Toán ETH</p>
                <h3 class="card-title">
                  {new Intl.NumberFormat().format(
                    currentStatistics.unpaid / 1000000000000000000
                  )}
                </h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">date_range</i> Last 24 Hours
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Spinner animation="border" role="status" style={{ pading: 50 }}>
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }
  }
}
const mapStateToProps = state => ({
  currentStatistics: state.ListDataETH.DashBroad.currentStatistics
});
export default connect(mapStateToProps, null)(Overview);
