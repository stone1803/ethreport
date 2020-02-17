import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import { HashLoader } from "react-spinners";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

class Overview extends Component {
  render() {
    let { currentStatistics ,worker} = this.props;
    console.log(this.props);
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
      <h3 class="card-title">{worker.length}</h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">local_offer</i> Xem chi tiết
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
                <h3 class="card-title">{worker.length-currentStatistics.activeWorkers}</h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">local_offer</i> Xem chi tiết
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
                  <i class="material-icons">local_offer</i> Xem chi tiết
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-success card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">payment</i>
                </div>
                <p class="card-category">Chưa thanh toán  ETH</p>
                <h3 class="card-title">{new Intl.NumberFormat().format(currentStatistics.unpaid/1000000000000000000 )}</h3>
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
      return <div className="HashLoader container">
      <HashLoader
        css={override}
        size={150}
        //size={"150px"} this also works
        color={"#123abc"}
      />
    </div>;
    }
  }
}
const mapStateToProps = state => ({
  currentStatistics: state.ListDataETH.DashBroad.currentStatistics,
  worker: state.ListDataETH.Workers
});
export default connect(mapStateToProps, null)(Overview);
