import "./displayComitteMember.css";
import React, { Component } from "react";
import Header from "../HeaderComponent/header";
import axios from "axios";

export default class displayComitteeMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
    };
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
        <Header />
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
                </center>
              </div>
            ))}
          </div>
        </div>
        <br />
      </div>
    );
  }
}
