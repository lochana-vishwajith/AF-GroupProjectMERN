import React, { Component } from "react";
import "./updateMember.css";
import TextInput from "../TextInputComponent/textInputComponent";
import Button from "../ButtonComponent/buttonComponent";
import axios from "axios";
import EditorHeader from "../EditorHeader/editorHeader";

export default class updateMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: "",
      memberName: "",
      memberPosition: "",
      memberQualification: "",
      memberNotes: "",
      imageUrl: "",
    };
    this.saveDetails = this.saveDetails.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
  }

  saveDetails() {
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
      .put(
        `http://localhost:5000/memberDetails/${this.props.match.params.id}`,
        details
      )
      .then(() => {
        alert("Details Are Updated");
      })
      .catch((err) => {
        console.log(err);
        alert("Details Are Not Updated");
      });
  }
  handlerChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    axios
      .get(`http://localhost:5000/memberDetails/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res.data.detail);
        this.setState({ member: res.data.detail });
        this.setState({ memberName: res.data.detail.memberName });
        this.setState({ memberPosition: res.data.detail.memberPosition });
        this.setState({ memberNotes: res.data.detail.memberNotes });
        this.setState({
          memberQualification: res.data.detail.memberQualification,
        });
        this.setState({ imageUrl: res.data.detail.imageUrl });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <EditorHeader />
        <div className="container">
          <br />
          <h2>Update Committee Member Details</h2>
          <hr />
          <form>
            <center>
              <img src={this.state.imageUrl} className="image" />
            </center>
            <br />
            <TextInput
              type={"text"}
              placeholder={"Please Enter Member Name"}
              name={"memberName"}
              value={this.state.memberName}
              onchange={this.handlerChange}
              id={"memberName"}
              fieldValue={"Member Name"}
            />
            <TextInput
              type={"text"}
              placeholder={"Please Enter Member Position"}
              name={"memberPosition"}
              value={this.state.memberPosition}
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
                value={this.state.memberQualification}
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
                value={this.state.memberNotes}
                rows="6"
                cols="151"
                onChange={this.handlerChange}
              ></textarea>
            </div>

            <br />
            <Button
              type={"button"}
              classname={"btn btn-outline-dark"}
              value={"Save Member Details"}
              onsubmit={this.saveDetails}
            />
          </form>
          <br />
        </div>
      </div>
    );
  }
}
