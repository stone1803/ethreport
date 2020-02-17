import React, { Component } from "react";
import { connect } from "react-redux";
import { ethConvertBTC } from "../Coinmarketcap";
class Table extends Component {
  tamTinhETH = () => {
    const Onemhz = 0.00007684523;
    let { currentStatistics } = this.props;
    let a = Math.floor(currentStatistics.currentHashrate / 1000000);
    let tong = a * Onemhz;
    let total = Intl.NumberFormat().format(tong);
    return tong;
  };
  render() {
    let { currentStatistics } = this.props;
    console.log(ethConvertBTC());
    if (!currentStatistics) {
      return <div></div>;
    } else {
      console.log(currentStatistics.currentHashrate);
      let BTC = ethConvertBTC;
      return (
        <div classname="card-header card-headr-primary">
          <div className="table-responsive container">
            <h3>
              Tổng Miner :{" "}
              {Math.floor(currentStatistics.currentHashrate / 1000000)}GH/s
            </h3>

            <table className="table">
              <thead className=" text-primary">
                <tr>
                  <th>STT</th>
                  <th>Fees</th>
                  <th>ETH</th>
                  <th>BTC</th>
                  <th>USDT</th>
                  <th>Điện Tạm Tính</th>
                  <th>Vận Hành</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 Ngày</td>
                  <td>Free</td>
                  <td>{this.tamTinhETH()} ETH</td>
                  <td>{this.tamTinhETH() * 0.025463} BTC</td>
                  <td className="text-primary">
                    ${Math.floor(this.tamTinhETH() * 245.089173)}
                  </td>
                  <td>{currentStatistics.activeWorkers * 1.7}</td>
                  <td>{0.5}</td>
                </tr>
                <tr>
                  <td>1 Tuần</td>
                  <td>Free</td>
                  <td>{this.tamTinhETH() * 7} ETH</td>
                  <td>{this.tamTinhETH() * 0.025463 * 7} BTC</td>
                  <td className="text-primary">
                    ${Math.floor(this.tamTinhETH() * 245.089173) * 7}
                  </td>
                  <td>{currentStatistics.activeWorkers * 1.7 * 7}</td>
                </tr>
                <tr>
                  <td>1 Tháng</td>
                  <td>Free</td>
                  <td>{this.tamTinhETH() * 30} ETH</td>
                  <td>{this.tamTinhETH() * 0.025463 * 30} BTC</td>
                  <td className="text-primary">
                    ${Math.floor(this.tamTinhETH() * 245.089173) * 30}
                  </td>
                  <td>{currentStatistics.activeWorkers * 1.7 * 30}</td>
                  <td></td>
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
