import React, { Component } from "react";
import RHeader from '../ResearcherHeader/header';
import TextInput from "../TextInputComponent/textInputComponent";
import Button from "../ButtonComponent/buttonComponent";
import axios from "axios";


const initialState = {
  researchTitle: "",
  researchField: "",
  researchYear: "",
  coAuthors: "",
  fileURL: "",
  researchPaper: "",
};

export default class researchEditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:5000/researchDetails/getResearch/${this.props.match.params.id}`
      )
      .then((response) => {
        console.log(response.data.data);
        this.setState(response.data.data);
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
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
      fileURL: this.state.fileURL,
      isAccepted: "false",
    };

    console.log("DataSet", dataSet);

    axios
      .put(
        `http://localhost:5000/researchDetails/editResearchDetails/${this.props.match.params.id}`,
        dataSet
      )
      .then((response) => {
        alert("Research Details Updated!!!");
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
          <h2 className="mt-5 mb-5">Edit Research Details </h2>
          <form onSubmit={this.onSubmit}>
            <TextInput
              type={"text"}
              fieldValue={"Research Title"}
              name={"researchTitle"}
              value={this.state.researchTitle}
              id={"researchTitle"}
              onchange={this.onChange}
              placeholder={"Research Title"}
            />
            <TextInput
              type={"text"}
              fieldValue={"Research Field"}
              name={"researchField"}
              value={this.state.researchField}
              id={"researchField"}
              onchange={this.onChange}
              placeholder={"Research Field"}
            />
            <TextInput
              type={"date"}
              fieldValue={"Research Year"}
              name={"researchYear"}
              value={this.state.researchYear}
              id={"researchYear"}
              onchange={this.onChange}
              placeholder={"Research Year"}
            />
            <TextInput
              type={"text"}
              fieldValue={"Research Author"}
              name={"coAuthors"}
              value={this.state.coAuthors}
              id={"coAuthors"}
              onchange={this.onChange}
              placeholder={"Research Author"}
            />
            {/* <TextInput
              type={"file"}
              fieldValue={"Research Paper"}
              name={"fileURL"}
              value={this.state.fileURL}
              id={"fileURL"}
              onchange={this.onChange}
              placeholder={"Research Paper"}
            /> */}
            <Button
              type={"submit"}
              classname={"btn btn-info"}
              //   onClick={this.onSubmit}
              value={"Edit Details"}
            />
          </form>
        </div>
      </div>
    );
  }
}
