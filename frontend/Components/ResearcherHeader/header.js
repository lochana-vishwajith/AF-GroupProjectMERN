import React, { Component } from "react";

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
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/researchAdd"
                  >
                    Add Research
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`/researchEdit/${sessionStorage.getItem("uid")}`}
                  >
                    View Researches
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/researchAccepted">
                    Accepted Researches
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/profile">
                    My profile
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    home
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
