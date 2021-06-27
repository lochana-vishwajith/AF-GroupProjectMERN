import React, { Component } from "react";
import "./header.css";

export default class header extends Component {
  render() {
    return (
      <div className="header-img">
        <nav className="navbar navbar-expand-lg" id="header">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              logo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Key Notes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Committe Members
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Registration
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    WorkShops
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Template Download
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
