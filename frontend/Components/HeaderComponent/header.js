import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default class header extends Component {
  render() {
    return (
      <div className="header-img">
        <nav className="navbar navbar-expand-lg" id="header">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              logo
            </Link>
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
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
             
                <li className="nav-item">
                  <Link className="nav-link" to="/displayComMembers">
                    Committe Members
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/chooseReg">
                    Registration
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/final-workshops">
                    WorkShops
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/researchAdd">
                    Research
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/researchReview">
                    Research Review
                  </Link>
                </li>

                

                <li className="nav-item">
                  <Link className="nav-link" to="/getWorkshopusers">
                    Conductors
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/displayTemplate">
                    Template Download
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
