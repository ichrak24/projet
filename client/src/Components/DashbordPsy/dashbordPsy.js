import React from "react";
import { Link } from "react-router-dom";
import Dashbord from "../profil/profil";
import { logout } from "../../JS/actions/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const DashbordPsy = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="dashboard-main-wrapper">
      {/* ============================================================== */}
      {/* navbar */}
      {/* ============================================================== */}
      <div className="dashboard-header">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <a className="navbar-brand" href="index.html">
            Dashboard Psy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto navbar-right-top">
              <li className="nav-item">
                <div id="custom-search" className="top-search-bar">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search.."
                  />
                </div>
              </li>
              <li className="nav-item dropdown notification">
                <a
                  className="nav-link nav-icons"
                  href="#"
                  id="navbarDropdownMenuLink1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-fw fa-bell" />{" "}
                  <span className="indicator" />
                </a>
                <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
                  <li>
                    <div className="notification-title"> Notification</div>
                    <div className="notification-list">
                      <div className="list-group">
                        <a
                          href="#"
                          className="list-group-item list-group-item-action active"
                        >
                          <div className="notification-info">
                            <div className="notification-list-user-img">
                              <img
                                src="/assets/assetsdash/images/avatar-2.jpg"
                                alt=""
                                className="user-avatar-md rounded-circle"
                              />
                            </div>
                            <div className="notification-list-user-block">
                              <span className="notification-list-user-name">
                                Jeremy Rakestraw
                              </span>
                              accepted your invitation to join the team.
                              <div className="notification-date">2 min ago</div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          <div className="notification-info">
                            <div className="notification-list-user-img">
                              <img
                                src="/assets/assetsdash/images/avatar-3.jpg"
                                alt=""
                                className="user-avatar-md rounded-circle"
                              />
                            </div>
                            <div className="notification-list-user-block">
                              <span className="notification-list-user-name">
                                John Abraham{" "}
                              </span>
                              is now following you
                              <div className="notification-date">
                                2 days ago
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          <div className="notification-info">
                            <div className="notification-list-user-img">
                              <img
                                src="/assets/assetsdash/images/avatar-4.jpg"
                                alt=""
                                className="user-avatar-md rounded-circle"
                              />
                            </div>
                            <div className="notification-list-user-block">
                              <span className="notification-list-user-name">
                                Monaan Pechi
                              </span>{" "}
                              is watching your main repository
                              <div className="notification-date">2 min ago</div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          <div className="notification-info">
                            <div className="notification-list-user-img">
                              <img
                                src="/assets/assetsdash/images/avatar-5.jpg"
                                alt=""
                                className="user-avatar-md rounded-circle"
                              />
                            </div>
                            <div className="notification-list-user-block">
                              <span className="notification-list-user-name">
                                Jessica Caruso
                              </span>
                              accepted your invitation to join the team.
                              <div className="notification-date">2 min ago</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list-footer">
                      {" "}
                      <a href="#">View all notifications</a>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown connection">
                <a
                  className="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  <i className="fas fa-fw fa-th" />{" "}
                </a>
                <ul className="dropdown-menu dropdown-menu-right connection-dropdown">
                  <li className="connection-list">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                        <a href="#" className="connection-item">
                          <img
                            src="/assets/assetsdash/images/github.png"
                            alt=""
                          />{" "}
                          <span>Github</span>
                        </a>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                        <a href="#" className="connection-item">
                          <img
                            src="/assets/assetsdash/images/dribbble.png"
                            alt=""
                          />{" "}
                          <span>Dribbble</span>
                        </a>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                        <a href="#" className="connection-item">
                          <img
                            src="/assets/assetsdash/images/dropbox.png"
                            alt=""
                          />{" "}
                          <span>Dropbox</span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                        <a href="#" className="connection-item">
                          <img
                            src="/assets/assetsdash/images/bitbucket.png"
                            alt=""
                          />{" "}
                          <span>Bitbucket</span>
                        </a>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                        <a href="#" className="connection-item">
                          <img
                            src="/assets/assetsdash/images/mail_chimp.png"
                            alt=""
                          />
                          <span>Mail chimp</span>
                        </a>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                        <a href="#" className="connection-item">
                          <img
                            src="/assets/assetsdash/images/slack.png"
                            alt=""
                          />{" "}
                          <span>Slack</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="conntection-footer">
                      <a href="#">More</a>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown nav-user">
                <a
                  className="nav-link nav-user-img"
                  href="#"
                  id="navbarDropdownMenuLink2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="/assets/assetsdash/images/avatar-1.jpg"
                    alt=""
                    className="user-avatar-md rounded-circle"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right nav-user-dropdown"
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  <div className="nav-user-info">
                    <h5 className="mb-0 text-white nav-user-name">
                      John Abraham{" "}
                    </h5>
                    <span className="status" />
                    <span className="ml-2">Available</span>
                  </div>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user mr-2" />
                    Account
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-cog mr-2" />
                    Setting
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-power-off mr-2" />
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* ============================================================== */}
      {/* end navbar */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* left sidebar */}
      {/* ============================================================== */}
      <div className="nav-left-sidebar sidebar-dark">
        <div className="menu-list">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="d-xl-none d-lg-none" href="#">
              Gérer mon Profile
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav flex-column">
                <li className="nav-divider">Menu Psy</li>
                <li className="nav-item ">
                  <a
                    className="nav-link active"
                    href="#"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-1"
                    aria-controls="submenu-1"
                  >
                    <i className="fa fa-fw fa-user-circle" />
                    <Link to="/profil">Gérer mon profile </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-2"
                    aria-controls="submenu-2"
                  >
                    <i className="fa fa-fw fa-rocket" />
                    <Link to="/fiche">Gérer Rendez-vous</Link>
                  </a>
                  <div
                    id="submenu-2"
                    className="collapse submenu"
                    style={{}}
                  ></div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-3"
                    aria-controls="submenu-3"
                  >
                    <i className="fas fa-fw fa-chart-pie" />
                    <Link to="/problem">Gérer Publication</Link>
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="#"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-4"
                    aria-controls="submenu-4"
                  >
                    <i className="fab fa-fw fa-wpforms" />
                    Gérer Planning
                  </a>
                  <div
                    id="submenu-4"
                    className="collapse submenu"
                    style={{}}
                  ></div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-5"
                    aria-controls="submenu-5"
                  >
                    <i className="fas fa-fw fa-table" />
                    <Link to="/ListPatient">Consulter List Patient</Link>
                  </a>
                  <div
                    id="submenu-5"
                    className="collapse submenu"
                    style={{}}
                  ></div>
                </li>
                <li className="nav-divider">Plus</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-9"
                    aria-controls="submenu-9"
                  >
                    <i className="fas fa-fw fa-map-marker-alt" />
                    <button
                      onClick={() => {
                        dispatch(logout());
                        history.push("/");
                      }}
                    >
                      {" "}
                      Logout
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end left sidebar */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* wrapper  */}
      {/* ============================================================== */}
      <div className="dashboard-wrapper">
        <div className="dashboard-finance">
          <div className="container-fluid dashboard-content">
            {/* ============================================================== */}
            {/* pageheader  */}
            {/* ============================================================== */}
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="page-header">
                  <h3 className="mb-2">Finance Dashboard </h3>
                  <p className="pageheader-text">
                    Proin placerat ante duiullam scelerisque a velit ac porta,
                    fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.
                  </p>
                  <div className="page-breadcrumb">
                    <nav aria-label="breadcrumb"></nav>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* end pageheader  */}
            {/* ============================================================== */}
            <div className="row">
              <div className="offset-xl-10 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="daterange"
                      defaultValue="01/01/2018 - 01/15/2018"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* ============================================================== */}
            {/* end inventory turnover */}
            {/* ============================================================== */}
          </div>
        </div>
        {/* ============================================================== */}
        {/* footer */}
        {/* ============================================================== */}
        <div className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                Copyright © 2018 Concept. All rights reserved. Dashboard by{" "}
                <a href="https://colorlib.com/wp/">Colorlib</a>.
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="text-md-right footer-links d-none d-sm-block">
                  <a href="javascript: void(0);">About</a>
                  <a href="javascript: void(0);">Support</a>
                  <a href="javascript: void(0);">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end footer */}
        {/* ============================================================== */}
      </div>
      {/* ============================================================== */}
      {/* end wrapper  */}
      {/* ============================================================== */}
    </div>
  );
};

export default DashbordPsy;
