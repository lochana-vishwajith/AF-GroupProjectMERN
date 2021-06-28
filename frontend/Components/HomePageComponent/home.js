import "./home.css";
import Header from "../HeaderComponent/header";
import React, { Component } from "react";

export default class home extends Component {
  render() {
    return (
      <div>
        <div className="header-img">
          <Header />
        </div>

        <div className="outer-div">
          <div className="page-name">
            <center>
              <h2 className="conf-name">
                Internatinal Conference on Application Framework
              </h2>
              <p className="dateOfConf">6,7 & 8 of September of 2021</p>
              <p className="venueOfConf">Kularathne Hall of Ananda Collage</p>
            </center>
          </div>
        </div>
        <div className="container">
          <br />
          <center>
            <p className="about">About Our Conference</p>

            <h3 className="aboutConfTopic">
              <b>Internatinal Conference on Application Framework</b>
            </h3>
          </center>
          <p>
            The 3rd International conference on advancements in computing -2021
            (ICAC2021) is organized by the Faculty of Computing of the Sri Lanka
            Institute of Information Technology (SLIIT) as an open forum for
            academics along with industry professionals to present the latest
            findings and research output and practical deployments in the
            Computer Science and Information Technology domains. Primary
            objective of the ICAC is to uplift the research culture and the
            quality of research done by Sri Lankan researchers. This conference
            will create a platform for national and international researchers to
            showcase their research output, networking opportunities to discuss
            innovative ideas, and initiate collaborative work. ICAC 2019 and
            ICAC 2020 were successfully conducted with a technical
            co-sponsorship by IEEE Sri Lanka Section and all publications are
            available in IEEE Xplore digital library December 9 - 11 in Sri
            Lanka Institute of Information Technology
          </p>
          <br />
          <center>
            <h3>
              <b>Conference Tracks</b>
            </h3>
          </center>
          <br />
          <div className="trackGrid">
            <div>
              <p>Frontend Frameworks and Best Parctices</p>
              <ul>
                <li>
                  <b>Introduction to Web Frameworks</b>
                </li>
                <li>React</li>
                <li>Angular</li>
              </ul>
            </div>
            <div>
              <p>ServerSide Frameworks and Best Parctices</p>
              <ul>
                <li>
                  <b>Introduction to ServerSide Frameworks</b>
                </li>
                <li>Express</li>
                <li>Koa</li>
              </ul>
            </div>
            <div>
              <p>Databases</p>
              <ul>
                <li>
                  <b>Introduction to Databases</b>
                </li>
                <li>MongoDB</li>
                <li>FireBase</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
