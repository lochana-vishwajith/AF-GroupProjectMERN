import "./registration.css";
import React, { Component } from "react";
import TextInput from "../TextInputComponent/textInputComponent";
import Header from "../HeaderComponent/header";
import Button from "../ButtonComponent/buttonComponent";
import axios from "axios";
import Select from "react-select";
import { storage } from "../../firebase";
import MyContext from "../../ContextAPI/MyContext";

const options = [
  { value: "WorkshopConductor", label: "WorkshopConductor" },
  { value: "Researcher", label: "Researcher" },
];

export default class registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      mobile: "",
      linkedIn: "",
      category: "",
      description: "",
      awards: "",
      profilePic: "",
      image: "",
      selectedOption: options,
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.Onchange = this.Onchange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.picUpload = this.picUpload.bind(this);
    this.upload = this.upload.bind(this);
  }

  handlerChange(e) {
    this.setState({ category: e.value });
  }
  Onchange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  async onSubmit(e) {
    e.preventDefault();

    const {
      name,
      email,
      password,
      mobile,
      linkedIn,
      category,
      description,
      awards,
      profilePic,
    } = this.state;

    const post = {
      name,
      email,
      password,
      mobile,
      linkedIn,
      category,
      description,
      awards,
      profilePic,
    };
    axios
      .post("http://localhost:5000/Users/addUsers", post)
      .then((res) => {
        // console.log('awaaaa');
        alert("Registration Completed please LogIn to continue");
        window.location = "/login";
      })
      .catch((err) => {
        alert("An error occurred");
        alert(err.message);
      });
  }

  picUpload(e) {
    e.preventDefault();
    if (e.target.files[0]) {
      this.setState({ [e.target.name]: e.target.files[0] });
    }
  }

  upload(e) {
    alert("picture is uploading please wait a minute");
    e.preventDefault();
    const { image } = this.state;

    if (!image) {
      alert("Please Select a Picture First");
    } else {
      const { image } = this.state;
      const date = Date.now();

      const uploadTask = storage
        .ref(`ProfilePics/${date}_${image.name}`)
        .put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("ProfilePics")
            .child(`${date}_${image.name}`)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              this.setState({ profilePic: url });
              alert("Picture has uploaded");
            });
        }
      );
    }
  }

  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <form>
            <h1>Registration Page </h1>

            <TextInput
              name={"name"}
              placeholder={"Enter Name"}
              fieldValue={"Name"}
              value={this.state.name}
              onchange={this.Onchange}
            />
            <TextInput
              name={"email"}
              placeholder={"Enter Email"}
              fieldValue={"Email"}
              value={this.state.email}
              onchange={this.Onchange}
            />

            <TextInput
              name={"mobile"}
              type={"number"}
              placeholder={"Enter Mobile Number"}
              fieldValue={"Mobile"}
              value={this.state.mobile}
              onchange={this.Onchange}
            />
            <TextInput
              name={"password"}
              type={"password"}
              placeholder={"Enter Password"}
              fieldValue={"password"}
              value={this.state.password}
              onchange={this.Onchange}
            />

            <TextInput
              name={"linkedIn"}
              placeholder={"Paste Link LinkedIn"}
              fieldValue={"LinkedIn"}
              value={this.state.linkedIn}
              onchange={this.Onchange}
            />

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Description About You
                  </span>
                </div>
                <textarea
                  placeholder={"Enter Description About You"}
                  id="description"
                  name="description"
                  rows="6"
                  cols="178"
                  onChange={this.Onchange}
                ></textarea>
              </div>
            </div>
            <br />
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Awards
                  </span>
                </div>
                <textarea
                  placeholder={"Enter Your Achievements"}
                  id="awards"
                  name="awards"
                  rows="6"
                  cols="178"
                  onChange={this.Onchange}
                ></textarea>
              </div>
            </div>
            <br />

            <div>
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Select the Appropriate User Type
                </span>
              </div>
              <Select
                placeholder={"Select User Type"}
                onChange={this.handlerChange}
                options={this.state.selectedOption}
              />
            </div>
            <br></br>
            <br></br>

            <div className="input-group mb-3">
              <TextInput
                type={"file"}
                placeholder={"Please Enter Member Image"}
                name={"image"}
                onchange={this.picUpload}
                id={"suerImage"}
                fieldValue={"User Image"}
                classname={"form-control"}
              />
              <div className="input-group-append ">
                <Button
                  type={"submit"}
                  classname={"btn btn-outline-secondary"}
                  value={"UploadImage"}
                  onsubmit={this.upload}
                />
              </div>
            </div>

            <br></br>

            <Button
              type={"submit"}
              classname={"btn btn-secondary"}
              value={"submit"}
              onsubmit={this.onSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}
