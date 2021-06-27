import "./home.css";
import Header from "../HeaderComponent/header";
import React, { Component } from "react";

export default class home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="page-name">
            <h2>Internatinal Conference on Application Framework</h2>
          </div>
        </div>
      </div>
    );
  }
}
