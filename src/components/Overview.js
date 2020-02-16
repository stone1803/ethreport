import React, { Component } from "react";
import { connect } from "react-redux";
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
                <h3 class="card-title">75</h3>
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
                <h3 class="card-title">751</h3>
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
                <p class="card-category">Thanh toán</p>
                <h3 class="card-title">$34,245</h3>
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
      return <div>LOADING</div>;
    }
  }
}
const mapStateToProps = state => ({
  currentStatistics: state.ListDataETH.DashBroad.currentStatistics
});
export default connect(mapStateToProps, null)(Overview);
