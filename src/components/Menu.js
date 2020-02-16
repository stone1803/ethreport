import React, { Component } from "react";
import {Link, NavLink} from "react-router-dom"
export default class Menu extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <a
            href="http://www.creative-tim.com"
            className="simple-text logo-normal"
          >
            IP COIN ETH
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="nav-item active  ">
            <NavLink className="nav-link" to="">
                <i className="material-icons">dashboard</i>
                <p>Tổng Quan</p>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/Ethmap" activeClassName="nav-item active">
                <i className="material-icons">content_paste</i>
                <p>ETH Miner</p>
              </NavLink>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./user.html">
                <i className="material-icons">money</i>
                <p>Thu Nhập</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./typography.html">
                <i className="material-icons">library_books</i>
                <p>Typography</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./icons.html">
                <i className="material-icons">bubble_chart</i>
                <p>Icons</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./map.html">
                <i className="material-icons">location_ons</i>
                <p>Maps</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./notifications.html">
                <i className="material-icons">notifications</i>
                <p>Notifications</p>
              </a>
            </li>
            {/* <li class="nav-item active-pro ">
                  <a class="nav-link" href="./upgrade.html">
                      <i class="material-icons">unarchive</i>
                      <p>Upgrade to PRO</p>
                  </a>
              </li> */}
          </ul>
        </div>
      </div>
    );
  }
}
