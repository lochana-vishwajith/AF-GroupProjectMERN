import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const RenderMenu = () => {
  if (!sessionStorage.getItem("token")) {
    return (
      <div className="header-img">
        <nav className="navbar navbar-expand-lg" id="header">
          <div className="container-fluid">
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
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/getWorkshopusers">
                    Key Notes
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/displayComMembers">
                    Committe Members
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/chooseReg">
                    Registration
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  } else {
    if (sessionStorage.getItem("category") == "Researcher") {
      return (
        <div className="header-img">
          <nav className="navbar navbar-expand-lg" id="header">
            <div className="container-fluid">
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
                    <Link className="nav-link" to="/final-workshops">
                      WorkShops
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/getWorkshopusers">
                      Key Notes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/displayTemplate">
                      Template Download
                    </Link>
                  </li>
                  <li className="nav-item" id="logout">
                    <Link className="nav-link" to="/">
                      <i
                        className="fas fa-sign-out-alt"
                        id="logoutEditor"
                        onClick={() => {
                          sessionStorage.clear();
                          window.location = "/";
                        }}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    } else if (sessionStorage.getItem("category") == "WorkshopConductor") {
      return (
        <div className="header-img">
          <nav className="navbar navbar-expand-lg" id="header">
            <div className="container-fluid">
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
                    <Link className="nav-link" to="/final-workshops">
                      WorkShops
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/getWorkshopusers">
                      Key Notes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/displayTemplate">
                      Template Download
                    </Link>
                  </li>
                  <li className="nav-item" id="logout">
                    <Link className="nav-link" to="/">
                      <i
                        className="fas fa-sign-out-alt"
                        id="logoutEditor"
                        onClick={() => {
                          sessionStorage.clear();
                          window.location = "/";
                        }}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    } else if (sessionStorage.getItem("category") == "Attendee") {
      if (sessionStorage.getItem("pay")) {
        return (
          <div className="header-img">
            <nav className="navbar navbar-expand-lg" id="header">
              <div className="container-fluid">
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
                      <Link className="nav-link" to="/final-workshops">
                        WorkShops
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/getWorkshopusers">
                        Key Notes
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/research4client">
                        Research-Papers
                      </Link>
                    </li>

                    <li className="nav-item" id="logout">
                      <Link className="nav-link" to="/">
                        <i
                          className="fas fa-sign-out-alt"
                          id="logoutEditor"
                          onClick={() => {
                            sessionStorage.clear();
                            window.location = "/";
                          }}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        );
      } else {
        return (
          <div className="header-img">
            <nav className="navbar navbar-expand-lg" id="header">
              <div className="container-fluid">
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
                      <Link className="nav-link" aria-current="page" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/getWorkshopusers">
                        Key Notes
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
                    <li className="nav-item" id="logout">
                      <Link className="nav-link" to="/">
                        <i
                          className="fas fa-sign-out-alt"
                          id="logoutEditor"
                          onClick={() => {
                            sessionStorage.clear();
                            window.location = "/";
                          }}
                        />
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
  }
};

export default class header extends Component {
  render() {
    return (
      <div>
        <RenderMenu />
      </div>
    );
  }
}
