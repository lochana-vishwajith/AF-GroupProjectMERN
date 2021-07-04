import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ReviewerHeader.css";

export default class ResearchHeader extends Component {
  logout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    window.location = "/";
  };
  render() {
    return (
      <div>
        <div>
          <div>
            <nav className="navbar navbar-expand-lg" id="header">
              <div className="container-fluid">
                <Link className="navbar-brand">logo</Link>
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
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to="/admin-workshops"
                      >
                        Workshop-Review
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/researchReview">
                        Research-Review
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" id="logoutEditor" to="/">
                        <i
                          className="fas fa-sign-out-alt"
                          id="logoutEditor"
                          onClick={this.logout}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
