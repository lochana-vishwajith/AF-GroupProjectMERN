import React, { Component } from "react";
import "./editorHeader.css";
import { Link } from "react-router-dom";

export default class editorHeader extends Component {
  render() {
    return (
      <div>
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
                    to="/addTemplate"
                  >
                    Upload Templates
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/homePageConfig">
                    Add Home Page Style
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addComMembers">
                    Add Committe Member Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/displayComMembersEditor">
                    Display Committe Member Details
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
