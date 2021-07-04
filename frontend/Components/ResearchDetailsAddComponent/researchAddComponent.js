import RHeader from "../ResearcherHeader/header";
import React, { Component } from "react";
import TextInput from "../TextInputComponent/textInputComponent";
import Button from "../ButtonComponent/buttonComponent";
import axios from "axios";
import { storage } from "../../firebase/index";

const initialState = {
  researchTitle: "",
  researchField: "",
  researchYear: "",
  coAuthors: "",
  fileURL: "",
  researchPaper: "",
};

export default class researchAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handlerChangeFiles = this.handlerChangeFiles.bind(this);
    this.saveDetails = this.saveDetails.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handlerChangeFiles(e) {
    if (e.target.files[0]) {
      this.setState({ [e.target.name]: e.target.files[0] });
    }
  }

  saveDetails() {
    console.log("inside save Details");
    const { researchPaper } = this.state;
    const date = Date.now();

    const uploadTask = storage
      .ref(`researchPapers/${date}_${researchPaper.name}`)
      .put(researchPaper);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("researchPapers")
          .child(`${date}_${researchPaper.name}`)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ fileURL: url });
            setTimeout(this.onSubmit(), 3000);
          });
      }
    );
  }

  onSubmit() {
    // e.preventDefault();

    console.log(" inside submit");

    const dataSet = {
      researchTitle: this.state.researchTitle,
      researchField: this.state.researchField,
      researchYear: this.state.researchYear,
      coAuthors: this.state.coAuthors,
      fileURL: this.state.fileURL,
      isAccepted: "false",
      isPayed: "false",
    };

    console.log("DataSet", dataSet);
    //const id = "60d82ca3b881ad7a64ce04f2";

    axios
      .post(
        `http://localhost:5000/researchDetails/addResearchDetails/${sessionStorage.getItem(
          "uid"
        )}`,
        dataSet
      )
      .then((response) => {
        alert("Research Details Added!!!");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  render() {
    return (
      <div>
        <RHeader />
        <div className="container">
          <h2 className="mt-5 mb-5">Research Details </h2>
          <form>
            <TextInput
              type={"text"}
              fieldValue={"Research Title"}
              name={"researchTitle"}
              //   value={this.state.researchTitle}
              id={"researchTitle"}
              onchange={this.onChange}
              placeholder={"Research Title"}
            />
            <TextInput
              type={"text"}
              fieldValue={"Research Field"}
              name={"researchField"}
              //   value={"value"}
              id={"researchField"}
              onchange={this.onChange}
              placeholder={"Research Field"}
            />
            <TextInput
              type={"date"}
              fieldValue={"Research Year"}
              name={"researchYear"}
              //   value={"value"}
              id={"researchYear"}
              onchange={this.onChange}
              placeholder={"Research Year"}
            />
            <TextInput
              type={"text"}
              fieldValue={"Research Author"}
              name={"coAuthors"}
              //   value={"value"}
              id={"coAuthors"}
              onchange={this.onChange}
              placeholder={"Research Author"}
            />
            <TextInput
              type={"file"}
              fieldValue={"Research Paper"}
              name={"researchPaper"}
              //   value={"value"}
              id={"researchPaper"}
              onchange={this.handlerChangeFiles}
              placeholder={"Research Paper"}
            />
            <Button
              type={"button"}
              classname={"btn btn-info"}
              value={"Add Details"}
              onsubmit={this.saveDetails}
            />
          </form>
        </div>
      </div>
    );
  }
}
