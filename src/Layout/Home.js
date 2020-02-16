import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
      <div>
  <div className="wrapper ">
    <div className="sidebar" data-color="purple" data-background-color="black" data-image="../assets/img/sidebar-2.jpg">
      {/*
          Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"
  
          Tip 2: you can also add an image using data-image tag
      */}
      <div className="logo"><a href="http://www.creative-tim.com" className="simple-text logo-normal">
          IP COIN ETH 
        </a></div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item active  ">
            <a className="nav-link" href="./dashboard.html">
              <i className="material-icons">dashboard</i>
              <p>Tổng Quan</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./tables.html">
              <i className="material-icons">content_paste</i>
              <p>ETH Miner</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./user.html">
              <i className="material-icons">
                money
              </i>
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
    <div className="main-panel">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top " id="navigation-example">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <a className="navbar-brand" href="javascript:void(0)">Dashboard</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation" data-target="#navigation-example">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar" />
            <span className="navbar-toggler-icon icon-bar" />
            <span className="navbar-toggler-icon icon-bar" />
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <form className="navbar-form">
              <div className="input-group no-border">
                <input type="text" defaultValue className="form-control" placeholder="Search..." />
                <button type="submit" className="btn btn-default btn-round btn-just-icon">
                  <i className="material-icons">search</i>
                  <div className="ripple-container" />
                </button>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="material-icons">dashboard</i>
                  <p className="d-lg-none d-md-block">
                    Stats
                  </p>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="javscript:void(0)" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons">notifications</i>
                  <span className="notification">5</span>
                  <p className="d-lg-none d-md-block">
                    Some Actions
                  </p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="javascript:void(0)">Mike John responded to your email</a>
                  <a className="dropdown-item" href="javascript:void(0)">You have 5 new tasks</a>
                  <a className="dropdown-item" href="javascript:void(0)">You're now friend with Andrew</a>
                  <a className="dropdown-item" href="javascript:void(0)">Another Notification</a>
                  <a className="dropdown-item" href="javascript:void(0)">Another One</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="material-icons">person</i>
                  <p className="d-lg-none d-md-block">
                    Account
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
      <div className="mt-5">
        <div className="container-fluid">
          <div className="row">
          </div>
        </div>
      </div>
      <div className="row container-fluid mt-3">
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-warning card-header-icon">
              <div className="card-icon">
                <i className="material-icons">content_copy</i>
              </div>
              <p className="card-category">Used Space</p>
              <h3 className="card-title">49/50
                <small>GB</small>
              </h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons text-warning">warning</i>
                <a href="#pablo" className="warning-link">Get More Space...</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-success card-header-icon">
              <div className="card-icon">
                <i className="material-icons">
                  payment
                </i>                </div>
              <p className="card-category">Tổng thanh toán</p>
              <h3 className="card-title">$34,245</h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">date_range</i> Last 24 Hours
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-danger card-header-icon">
              <div className="card-icon">
                <i className="material-icons">
                  computer
                </i>
              </div>
              <p className="card-category">Trâu Off</p>
              <h3 className="card-title">75</h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">local_offer</i> Tracked from Github
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-info card-header-icon">
              <div className="card-icon">
                <i className="material-icons">
                  computer
                </i>                </div>
              <p className="card-category">Trâu On</p>
              <h3 className="card-title">+245</h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">update</i> Just Updated
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Employees Stats</h4>
              <p className="card-category">New employees on 15th September, 2016</p>
            </div>
            <div className="card-body table-responsive">
              <table className="table table-hover">
                <thead className="text-warning">
                  <tr><th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Country</th>
                  </tr></thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Dakota Rice</td>
                    <td>$36,738</td>
                    <td>Niger</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Minerva Hooper</td>
                    <td>$23,789</td>
                    <td>Curaçao</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Sage Rodriguez</td>
                    <td>$56,142</td>
                    <td>Netherlands</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Philip Chaney</td>
                    <td>$38,735</td>
                    <td>Korea, South</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="card">
            <div className="card-header card-header-tabs card-header-warning">
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <span className="nav-tabs-title">Tasks:</span>
                  <ul className="nav nav-tabs" data-tabs="tabs">
                    <li className="nav-item">
                      <a className="nav-link active" href="#profile" data-toggle="tab">
                        <i className="material-icons">bug_report</i> Bugs
                        <div className="ripple-container" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#messages" data-toggle="tab">
                        <i className="material-icons">code</i> Website
                        <div className="ripple-container" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#settings" data-toggle="tab">
                        <i className="material-icons">cloud</i> Server
                        <div className="ripple-container" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="tab-content">
                <div className="tab-pane active" id="profile">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                        </td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Create 4 Invisible User Experiences you Never Knew About</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane" id="messages">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                        </td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane" id="settings">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                        </td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-white btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer">
    <div className="container-fluid">
      <div className="copyright float-right" id="date">
        , made with <i className="material-icons">favorite</i> by
        <a href="https://www.huyenhoctips.web.app" target="_blank">Phúc Mập and thank Creative Tim
        </a></div><a href="https://www.huyenhoctips.web.app" target="_blank">
      </a></div><a href="https://www.huyenhoctips.web.app" target="_blank">
    </a></footer><a href="https://www.huyenhoctips.web.app" target="_blank">
  </a><div className="fixed-plugin"><a href="https://www.huyenhoctips.web.app" target="_blank">
    </a><div className="dropdown show-dropdown"><a href="https://www.huyenhoctips.web.app" target="_blank">
      </a><ul className="dropdown-menu"><a href="https://www.huyenhoctips.web.app" target="_blank">
          <li className="header-title"> Sidebar Filters</li>
        </a><li className="adjustments-line"><a href="https://www.huyenhoctips.web.app" target="_blank">
          </a><a href="javascript:void(0)" className="switch-trigger active-color">
            <div className="badge-colors ml-auto mr-auto">
              <span className="badge filter badge-purple active" data-color="purple" />
              <span className="badge filter badge-azure" data-color="azure" />
              <span className="badge filter badge-green" data-color="green" />
              <span className="badge filter badge-warning" data-color="orange" />
              <span className="badge filter badge-danger" data-color="danger" />
            </div>
            <div className="clearfix" />
          </a>
        </li>
        <li className="header-title">Images</li>
        <li>
          <a className="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-1.jpg" alt />
          </a>
        </li>
        <li className="active">
          <a className="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-2.jpg" alt />
          </a>
        </li>
        <li>
          <a className="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-3.jpg" alt />
          </a>
        </li>
        <li>
          <a className="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-4.jpg" alt />
          </a>
        </li>
        <li className="button-container">
          <a href="https://www.creative-tim.com/product/material-dashboard-dark" target="_blank" className="btn btn-primary btn-block">Free Download</a>
        </li>
        {/* <li class="header-title">Want more components?</li>
              <li class="button-container">
                  <a href="https://www.creative-tim.com/product/material-dashboard-pro" target="_blank" class="btn btn-warning btn-block">
                    Get the pro version
                  </a>
              </li> */}
        <li className="button-container">
          <a href="https://demos.creative-tim.com/material-dashboard-dark/docs/2.0/getting-started/introduction.html" target="_blank" className="btn btn-default btn-block">
            View Documentation
          </a>
        </li>
        <li className="button-container github-star">
          <a className="github-button" href="https://github.com/creativetimofficial/material-dashboard/tree/dark-edition" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
        </li>
        <li className="header-title">Thank you for 95 shares!</li>
        <li className="button-container text-center">
          <button id="twitter" className="btn btn-round btn-twitter"><i className="fa fa-twitter" /> · 45</button>
          <button id="facebook" className="btn btn-round btn-facebook"><i className="fa fa-facebook-f" /> · 50</button>
          <br />
          <br />
        </li>
      </ul>
    </div>
  </div>
</div>

        )
    }
}
