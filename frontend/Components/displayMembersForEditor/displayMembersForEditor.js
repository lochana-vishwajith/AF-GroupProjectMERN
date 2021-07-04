import "./displayMembersForEditor.css";
import React, { Component } from "react";
import Header from "../HeaderComponent/header";
import axios from "axios";
import Button from "../ButtonComponent/buttonComponent";
import { Link } from "react-router-dom";
import EditorHeader from "../EditorHeader/editorHeader";

export default class displayMembersForEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
    };
    this.deleteEntry = this.deleteEntry.bind(this);
  }
  deleteEntry(id) {
    alert("method called" + id);
    axios
      .delete(`http://localhost:5000/memberDetails/${id}`)
      .then(() => {
        alert("Entry is Deleted");
        window.location.reload();
      })
      .catch((err) => {
        alert("Entry is not Deleted");
        console.log(err);
      });
  }
  componentDidMount() {
    axios.get("http://localhost:5000/memberDetails/").then((res) => {
      console.log(res.data);
      this.setState({ members: res.data });
    });
  }

  render() {
    const { members } = this.state;
    return (
      <div>
        <EditorHeader />
        <div className="container">
          <h3>
            <b>Comittee Members</b>
          </h3>
          <hr />
          <div className="comitteeDiv">
            {members.map((details) => (
              <div key={details._id} className="innerDiv">
                <center>
                  <img src={details.imageUrl} className="image" />
                  <br />
                  <h4>{details.memberName}</h4>
                  <h6>{details.memberPosition}</h6>
                  <p>{details.memberQualification}</p>
                  <p>{details.memberNotes}</p>
                  <div className="btnDiv">
                    <div>
                      <Link to={`/updatemember/${details._id}`}>
                        <Button
                          type={"submit"}
                          classname={"btn btn-outline-primary"}
                          value={"Edit"}
                        />
                      </Link>
                    </div>
                    <div>
                      <Button
                        type={"submit"}
                        classname={"btn btn-outline-danger"}
                        value={"Delete"}
                        onsubmit={() => this.deleteEntry(details._id)}
                      />
                      <br />
                    </div>
                    <br />
                  </div>
                </center>
              </div>
            ))}
            <br />
          </div>
          <br />
        </div>
        <br />
      </div>
    );
  }
}
