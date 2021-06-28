import React, { Component } from "react";
import "./footer.css";

export default class footer extends Component {
  render() {
    return (
      <div className="footerdiv">
        <div className="footerGrid">
          <div>
            <p className="copyRights">&#169; UniqueScripters@2021</p>
          </div>
          <div className="followDiv">
            <div className="fbLogo">
              <img src="../../Images/fb.png" />
            </div>
            <div className="TwitLogo">
              <img src="../../Images/twit.png" />
            </div>
            <div className="LinkLogo">
              <img src="../../Images/linkedIn.png" />
            </div>
            <div className="InstaLogo">
              <img src="../../Images/insta.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
