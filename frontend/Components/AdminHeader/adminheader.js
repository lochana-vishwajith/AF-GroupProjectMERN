import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class adminheader extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg" id="header">
            <div className="container-fluid" id="editorOuterDivHeader">
              <Link className="navbar-brand" to="/">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/icaf-storage-c23a0.appspot.com/o/ProfilePics%2F1625309578593_MicrosoftTeams-image.png?alt=media&token=83190b54-d46d-475f-82fc-b31bfb78fa8b"
                  className="logoImg"
                />
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
                    <Link className="nav-link" to="/homePageAccept">
                      Admin-DashBoard
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
