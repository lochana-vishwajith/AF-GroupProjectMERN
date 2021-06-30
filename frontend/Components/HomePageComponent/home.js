import "./home.css";
import Header from "../HeaderComponent/header";
import React, { Component } from "react";
import axios from "axios";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/content/`).then((res) => {
      console.log(res.data[0]);
      this.setState({ content: res.data[0].contentId });
    });
  }

  render() {
    const { content } = this.state;
    return (
      <div>
        <div
          className="header-img-Home"
          style={{
            backgroundImage: `url(${content.imageUrl})`,
          }}
        >
          <Header />
        </div>

        <div className="outer-div">
          <div className="page-name">
            <center>
              <h2 className="conf-name">{content.confName}</h2>
              <p className="dateOfConf">{content.dateOfConf}</p>
              <p className="venueOfConf">{content.venueOfConf}</p>
            </center>
          </div>
        </div>
        <div className="container">
          <br />
          <center>
            <p className="about">About Our Conference</p>

            <h3 className="aboutConfTopic">
              <b>{content.confName}</b>
            </h3>
          </center>
          <p>{content.confDesc}</p>
          <br />
          <center>
            <h3>
              <b>Conference Tracks</b>
            </h3>
          </center>
          <br />
          <div className="trackGrid">
            <div>
              <ul>{content.trackOne}</ul>
            </div>
            <div>
              <ul>{content.trackTwo}</ul>
            </div>
            <div>
              <ul>{content.trackThree}</ul>
            </div>
            <div>
              <ul>{content.trackFour}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
