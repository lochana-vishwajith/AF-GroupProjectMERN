import React, { Component } from "react";
import "./homepageconfig.css";
import Select from "react-select";
import axios from "axios";
import TextInput from "../TextInputComponent/textInputComponent";

export default class homePageConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "https://i.stack.imgur.com/y9DpT.jpg",
      confName: "",
      dateOfConf: "",
      venueOfConf: "",
      imageUplaod: "",
      confDesc: "",
      trackOne: "",
      trackTwo: "",
      trackFour: "",
    };
    this.fileChange = this.fileChange.bind(this);
  }
  fileChange(e) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        this.setState({ image: reader.result });
        this.setState({ imageUplaod: e.target.files[0] });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  render() {
    const { image } = this.state;
    return (
      <div className="config">
        <div className="image-holder">
          <img src={image} alt="" className="img" />
        </div>

        <br />
        <label htmlFor="configImg" className="imgName">
          <i className="fas fa-image" id="acc-icon" />
          Upload an Image
        </label>
        <input
          type="file"
          name="image"
          id="configImg"
          accept="image/*"
          onChange={this.fileChange}
        />
        <div className="outer-div">
          <div className="page-name">
            <center>
              <h2 className="conf-name">
                <TextInput
                  type={"text"}
                  placeholder={"Enter Conference Name"}
                  name={"confName"}
                  onchange={this.handlerChange}
                  id={"confName"}
                  fieldValue={"Conference Name"}
                />
              </h2>
              <p className="dateOfConf">
                <TextInput
                  type={"text"}
                  placeholder={"Enter Conference Dates"}
                  name={"dateOfConf"}
                  onchange={this.handlerChange}
                  id={"dateOfConf"}
                  fieldValue={"Conference Dates"}
                />
              </p>
              <p className="venueOfConf">
                <TextInput
                  type={"text"}
                  placeholder={"Enter the Venue Conference"}
                  name={"venueOfConf"}
                  onchange={this.handlerChange}
                  id={"venueOfConf"}
                  fieldValue={"Conference Name"}
                />
              </p>
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
          <div>
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Brief Description About The Conference
              </span>
            </div>
            <textarea
              id="confDesc"
              name="confDesc"
              rows="6"
              cols="151"
              onChange={this.handlerChange}
            ></textarea>
          </div>
          <br />
          <center>
            <h3>
              <b>Conference Tracks</b>
            </h3>
          </center>
          <br />
          <div className="trackGrid">
            <div className="innerGrid">
              <div>
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Conference Track 01 :
                  </span>
                </div>
                <textarea
                  id="trackOne"
                  name="trackOne"
                  rows="6"
                  cols="75"
                  onChange={this.handlerChange}
                ></textarea>
              </div>
            </div>
            <div className="innerGrid">
              <div>
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Conference Track 02 :
                  </span>
                </div>
                <textarea
                  id="trackTwo"
                  name="trackTwo"
                  rows="6"
                  cols="75"
                  onChange={this.handlerChange}
                ></textarea>
              </div>
            </div>
            <div className="innerGrid">
              <div>
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Conference Track 03 :
                  </span>
                </div>
                <textarea
                  id="trackTree"
                  name="trackTree"
                  rows="6"
                  cols="75"
                  onChange={this.handlerChange}
                ></textarea>
              </div>
            </div>
            <div className="innerGrid">
              <div>
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Conference Track 04 :
                  </span>
                </div>
                <textarea
                  id="trackFour"
                  name="trackFour"
                  rows="6"
                  cols="75"
                  onChange={this.handlerChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
