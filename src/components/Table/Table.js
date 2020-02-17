import React, { Component } from "react";
import { connect } from "react-redux";
class Table extends Component {
  tamTinhETH = ()=>{
      const Onemhz = 0.00007684523
      let {currentStatistics} = this.props;
      let tong = (currentStatistics.currentHashrate* Onemhz)
      let total = Intl.NumberFormat().format(tong)
    return Math.floor(tong/1000000)

return tong  }
  render() {
    let { currentStatistics } = this.props;
    if (!currentStatistics) {
      return <div></div>;
    } else {
      return (
        <div classname="card-header card-headr-primary">
          <div className="table-responsive container">
            <table className="table">
              <thead className=" text-primary">
                <tr>
                  <th>Per</th>
                  <th>Fees</th>
                  <th>Est. Rewards</th>
                  <th>Rev. BTC</th>
                  <th>Rev. $</th>
                  <th>Cost</th>
                  <th>Profit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
      <td>1 Ngày</td>
                  <td>Free</td>
                  <td>{this.tamTinhETH()} ETH</td>
                  <td>{this.tamTinhETH()*0.025463} BTC</td>
                  <td className="text-primary">${Math.floor(this.tamTinhETH()*245.089173)}</td>
      <td>{Math.floor((0.1*24/1)*currentStatistics.activeWorkers)}</td>

                </tr>
                <tr>
                  <td>1 Tuần</td>
                  <td>Free</td>
                  <td>{this.tamTinhETH()*7} ETH</td>
                  <td>{(this.tamTinhETH()*0.025463)*7} BTC</td>
                  <td className="text-primary">${(Math.floor(this.tamTinhETH()*245.089173))*7}</td>
      <td>{(Math.floor((0.1*24/1)*currentStatistics.activeWorkers))*7}</td>
                </tr>
                <tr>
                  <td>1 Tháng</td>
                  <td>Free</td>
                  <td>{this.tamTinhETH()*30} ETH</td>
                  <td>{(this.tamTinhETH()*0.025463)*30} BTC</td>
                  <td className="text-primary">${(Math.floor(this.tamTinhETH()*245.089173)*30)}</td>
      <td>{(Math.floor((0.1*24/1)*currentStatistics.activeWorkers)*30)}</td>
                </tr>
               
                  
                
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  currentStatistics: state.ListDataETH.DashBroad.currentStatistics
});

export default connect(mapStateToProps, null)(Table);
