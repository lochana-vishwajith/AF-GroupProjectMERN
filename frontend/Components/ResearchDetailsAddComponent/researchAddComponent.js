import Header from "../HeaderComponent/header";
import React, { Component } from "react";
import TextInput from "../TextInputComponent/textInputComponent";
import Button from "../ButtonComponent/buttonComponent";
import axios from "axios";

const initialState = {
  researchTitle: "",
  researchField: "",
  researchYear: "",
  coAuthors: "",
  fileName: "",
};

export default class researchAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(" inside submit");

    const dataSet = {
      researchTitle: this.state.researchTitle,
      researchField: this.state.researchField,
      researchYear: this.state.researchYear,
      coAuthors: this.state.coAuthors,
      fileName: this.state.fileName,
      isAccepted: "false",
    };

    console.log("DataSet", dataSet);
    const id = "60d82ca3b881ad7a64ce04f2";

    axios
      .post(
        `http://localhost:5000/researchDetails/addResearchDetails/${id}`,
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
        <Header />
        <div className="container">
          <h2 className="mt-5 mb-5">Research Details </h2>
          <form onSubmit={this.onSubmit}>
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
              name={"fileName"}
              //   value={"value"}
              id={"fileName"}
              onchange={this.onChange}
              placeholder={"Research Paper"}
            />
            <Button
              type={"submit"}
              classname={"btn btn-info"}
              //   onClick={this.onSubmit}
              value={"Add Details"}
            />
          </form>
        </div>
      </div>
    );
  }
}
