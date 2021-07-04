import React, { Component } from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default class footer extends Component {
  render() {
    return (
      <div className="footerdiv">
        <div className="footerGrid">
          <div>
            <center>
              <p className="copyRights">&#169; UniqueScripters@2021</p>
            </center>
          </div>
        </div>
      </div>
    );
  }
}
