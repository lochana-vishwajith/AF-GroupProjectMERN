import React, { Component } from "react";
import "./addCommiteeMember.css";
import Header from "../HeaderComponent/header";
import TextInput from "../TextInputComponent/textInputComponent";
import Button from "../ButtonComponent/buttonComponent";
import { storage } from "../../firebase";
import axios from "axios";
import EditorHeader from "../EditorHeader/editorHeader";

export default class addCommiteeMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberName: "",
      memberPosition: "",
      memberQualification: "",
      memberNotes: "",
      memberImage: "",
      imageUrl: "",
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerChangeFiles = this.handlerChangeFiles.bind(this);
    this.saveDetails = this.saveDetails.bind(this);
    this.SubmitDetails = this.SubmitDetails.bind(this);
  }

  handlerChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handlerChangeFiles(e) {
    if (e.target.files[0]) {
      this.setState({ [e.target.name]: e.target.files[0] });
    }
  }

  saveDetails() {
    const { memberImage } = this.state;
    const date = Date.now();

    const uploadTask = storage
      .ref(`images/${date}_${memberImage.name}`)
      .put(memberImage);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(`${date}_${memberImage.name}`)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ imageUrl: url });
            setTimeout(this.SubmitDetails(), 3000);
          });
      }
    );
  }

  SubmitDetails() {
    const {
      memberName,
      memberPosition,
      memberQualification,
      memberNotes,
      imageUrl,
    } = this.state;

    const details = {
      memberName,
      memberPosition,
      memberQualification,
      memberNotes,
      imageUrl,
    };
    axios
      .post("http://localhost:5000/memberDetails/", details)
      .then(() => {
        alert("Details of Committee Member are Added Successfully");
        window.location = "/displayComMembersEditor";
      })
      .catch((err) => {
        alert("Error in Submiiting.Please Check Again Before Submitting...!");
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <EditorHeader />
        <div className="container">
          <br />
          <h2>Add Committee Members</h2>
          <hr />
          <br />
          <form>
            <TextInput
              type={"text"}
              placeholder={"Please Enter Member Name"}
              name={"memberName"}
              onchange={this.handlerChange}
              id={"memberName"}
              fieldValue={"Member Name"}
            />
            <TextInput
              type={"text"}
              placeholder={"Please Enter Member Position"}
              name={"memberPosition"}
              onchange={this.handlerChange}
              id={"memberPosition"}
              fieldValue={"Member Position"}
            />
            <div>
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Qualifications of the Member
                </span>
              </div>
              <textarea
                id="memberQualification"
                name="memberQualification"
                rows="6"
                cols="151"
                onChange={this.handlerChange}
              ></textarea>
            </div>
            <br />
            <div>
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Additional Notes of the Member
                </span>
              </div>
              <textarea
                id="memberNotes"
                name="memberNotes"
                rows="6"
                cols="151"
                onChange={this.handlerChange}
              ></textarea>
            </div>
            <TextInput
              type={"file"}
              placeholder={"Please Enter Member Image"}
              name={"memberImage"}
              onchange={this.handlerChangeFiles}
              id={"memberImage"}
              fieldValue={"Member Image"}
            />
            <br />
            <Button
              type={"button"}
              classname={"btn btn-outline-dark"}
              value={"Save Member Details"}
              onsubmit={this.saveDetails}
            />
          </form>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
