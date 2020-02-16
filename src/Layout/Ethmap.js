import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from "../components/Header";
import Overview from "../components/Overview"
import Menu from "../components/Menu"


export default class Ethmap extends Component {
    render() {
        return (
            <div>
            <div className="wrapper ">
              <div
                className="sidebar"
                data-color="purple"
                data-background-color="black"
                data-image="../assets/img/sidebar-2.jpg"
              >
     
                <Menu />
              </div>
              <div className="main-panel">
                <div className="mt-5">
                  <div className="container-fluid">
                    <div className="row"></div>
                  </div>
                </div>
                <div className="row container-fluid mt-3">
                </div>
              {/* content */}
              </div>
            </div>
        
          </div>
        )
    }
}
