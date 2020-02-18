import React, { Component } from "react";
import { connect } from "react-redux";
class Table extends Component {

  ETH = (loai, soTron) => {
    const Onemhz = 0.000078
    let { currentStatistics, coins } = this.props;

    let a = Math.floor(currentStatistics.currentHashrate / 1000000);
    let tong = a * Onemhz;
    switch (loai) {
      case "NULL":
        let tota = tong.toFixed(soTron);
        return tota;
        break;
      case "ETHBTC":
        let coin1 = coins.ETHBTC;
        let tota1 = (tong * coin1).toFixed(soTron);
        return tota1;
        break;
      case "ETH":
        let coin2 = coins.ETH;
        let tota2 = (tong * coin2).toFixed(soTron);
        return tota2;
        break;
      default:
        break;
    }
  };
  render() {
    let { currentStatistics, coins } = this.props;
    if (!currentStatistics) {
      return <div></div>;
    } else {
      return (
        <div classname="card-header card-headr-primary">
          <div className="table-responsive container">
            <h3>
              Khai thác :
              {Math.floor(currentStatistics.currentHashrate / 1000000)} GH/s
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
                  <th>Lợi Nhuận Khai Thác</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 Ngày</td>
                  <td>Free</td>
                  <td>{this.ETH("NULL", 2)} ETH</td>
                  <td>{this.ETH("ETHBTC", 3)} BTC</td>
                  <td className="text-primary">$ {this.ETH("ETH", 0)}</td>
                  <td>
                    $ {(currentStatistics.activeWorkers * 1.7).toFixed(0)}
                  </td>
                  <td className="text-danger">
                    ${" "}
                    {(
                      this.ETH("ETH", 3) -
                      currentStatistics.activeWorkers * 1.7
                    ).toFixed(0)}
                  </td>
                </tr>
                <tr>
                  <td>1 Tuần</td>
                  <td>Free</td>
                  <td>{this.ETH("NULL", 3) * 7} ETH</td>
                  <td>{(this.ETH("ETHBTC", 3) * 7).toFixed(3)} BTC</td>
                  <td className="text-primary">
                    $ {(this.ETH("ETH", 3) * 7).toFixed(0)}
                  </td>
                  <td>
                    $ {(currentStatistics.activeWorkers * 1.7 * 7).toFixed(0)}
                  </td>
                  <td>
                    {" "}
                    $
                    {(this.ETH("ETH", 3) * 7).toFixed(0) -
                      (currentStatistics.activeWorkers * 1.7 * 7).toFixed(0)}
                  </td>
                </tr>
                <tr>
                  <td>1 Tháng</td>
                  <td>Free</td>
                  <td>{this.ETH("NULL", 2) * 30} ETH</td>
                  <td>{(this.ETH("ETHBTC", 3) * 30).toFixed(3)} BTC</td>
                  <td className="text-primary">
                    $ {(this.ETH("ETH", 3) * 30).toFixed(0)}
                  </td>
                  <td>
                    $ {(currentStatistics.activeWorkers * 1.7 * 30).toFixed(0)}
                  </td>
                  <td>
                    {" "}
                    $
                    {(this.ETH("ETH", 3) * 30).toFixed(0) -
                      (currentStatistics.activeWorkers * 1.7 * 30).toFixed(0)}
                  </td>
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
  currentStatistics: state.ListDataETH.DashBroad.currentStatistics,
  coins: state.ListDataETH.Coin
});

export default connect(mapStateToProps, null)(Table);
