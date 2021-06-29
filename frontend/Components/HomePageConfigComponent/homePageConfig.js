import React, { Component } from "react";
import "./homepageconfig.css";
import Select from "react-select";
import axios from "axios";
import TextInput from "../TextInputComponent/textInputComponent";
import { storage } from "../../firebase";
import Button from "../ButtonComponent/buttonComponent";
import EditorHeader from "../EditorHeader/editorHeader";

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
      trackThree: "",
      trackFour: "",
      imageUrl: "",
      status: "pending",
    };
    this.fileChange = this.fileChange.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.saveImage = this.saveImage.bind(this);
    this.SubmitDetails = this.SubmitDetails.bind(this);
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

  handlerChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  saveImage() {
    const { imageUplaod } = this.state;
    const date = Date.now();

    const uploadTask = storage
      .ref(`images/${date}_${imageUplaod.name}`)
      .put(imageUplaod);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(`${date}_${imageUplaod.name}`)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ imageUrl: url });
            setTimeout(this.SubmitDetails(), 1000);
          });
      }
    );
  }
  SubmitDetails() {
    const {
      confName,
      dateOfConf,
      venueOfConf,
      imageUrl,
      confDesc,
      trackOne,
      trackTwo,
      trackThree,
      trackFour,
      status,
    } = this.state;

    const details = {
      confName,
      dateOfConf,
      venueOfConf,
      imageUrl,
      confDesc,
      trackOne,
      trackTwo,
      trackThree,
      trackFour,
      status,
    };
    axios
      .post("http://localhost:5000/homePage/", details)
      .then(() => {
        alert("Home Page Content Details are Added Successfully");
        window.location.reload();
      })
      .catch((err) => {
        alert("Error in Submiiting.Please Check Again Before Submitting...!");
        console.log(err);
      });
  }
  render() {
    const { image } = this.state;
    return (
      <div>
        <EditorHeader />
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
                    fieldValue={"Conference Venue"}
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
                    id="trackThree"
                    name="trackThree"
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
            <br />
            <center>
              <Button
                type={"submit"}
                classname={"btn btn-outline-dark"}
                value={"Save Details"}
                onsubmit={this.saveImage}
              />
            </center>
          </div>
          <br />
        </div>
      </div>
    );
  }
}
