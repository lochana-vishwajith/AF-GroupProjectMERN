import React, { Component } from "react";
import axios from "axios";
import "./myprofile.css";
import Header from "../HeaderComponent/header";
import Footer from "../FooterComponent/footer";
import TextInput from "../TextInputComponent/textInputComponent";
import Button from "../ButtonComponent/buttonComponent";
import data from "bootstrap/js/src/dom/data";

export default class myProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
    this.researchSelect = this.researchSelect.bind(this);
    this.updateSelect = this.updateSelect.bind(this);
    this.workshopSelect = this.workshopSelect.bind(this);
    this.DeleteSelect = this.DeleteSelect.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    if (sessionStorage.getItem("token")) {
      const accessToken = sessionStorage.getItem("token");
      const category = sessionStorage.getItem("category");
      const authorizations = "x-auth-user";
      axios.interceptors.request.use(
        (config) => {
          config.headers.authorization = `${accessToken}`;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      axios
        .get("http://localhost:5000/Users/myProfile")
        .then((res) => {
          this.setState({ data: res.data });
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("Logging Out");
      window.location = "/";
    }
  }

  logout(e) {
    e.preventDefault();
   sessionStorage.clear();
    window.location = "/";
  }

  workshopSelect(e) {
    e.preventDefault();
    const id = this.state.data._id;

    window.location = "/addworkshop";
  }

  researchSelect(e) {
    e.preventDefault();
    const id = this.state.data._id;
    window.location = `/researchEdit/${id}`;
  }

  updateSelect(e) {
    e.preventDefault();
    window.location = "/updateProfile";
  }

  DeleteSelect(e) {
    if (this.state.data.workshop) {
      alert("Sorry You Have Added Workshop ,You cant delete Account");
      window.location = "/updateProfile";
    } else if (this.state.data.research) {
      alert("Sorry You Have Added research  You cant delete Profile");
      window.location = "/updateProfile";
    } else {
      e.preventDefault();
      axios
        .delete("http://localhost:5000/Users/deleteUser")
        .then((res) => {
          alert("Account Deleted");
          sessionStorage.clear();
          window.location = "/";
        })
        .catch((err) => {
          alert(err.data);
        });
    }
  }
  render() {
    const attendee = sessionStorage.getItem("category") == "Attendee";
    const wrkS = sessionStorage.getItem("category") == "WorkshopConductor";
    const research = sessionStorage.getItem("category") == "Researcher";

    return (
      <div>
        <Header />
        <br />
        {attendee ? (
          <div>
            <h1>Sorry You Need to be a Host to have a User Profile</h1>
          </div>
        ) : (
          <div className={"outer-box-profile"}>
            <div className="card box-profile">
              <div className="card-body ">
                <h1 className="card-title title-txt">{this.state.data.name}</h1>
                <center>
                  <img
                    className="card-img-top"
                    src={this.state.data.profilePic}
                    alt="Card image cap"
                  />
                </center>
              </div>
              <center>
                {" "}
                <ul className="list-group list-group-flush">
                  <b>
                    <label htmlFor="mobile">MOBILE </label>
                  </b>
                  <b>
                    <li>{this.state.data.mobile}</li>
                  </b>
                  <br></br>
                  <b>
                    <label htmlFor="email">EMAIL </label>
                  </b>
                  <b>
                    <li>{this.state.data.email}</li>
                  </b>
                  <br></br>
                  <b>
                    <label htmlFor="LinkedIn">LINKEDIN </label>
                  </b>
                  <b>
                    <li>
                      <a href={this.state.data.linkedIn}>LinkedIn Account</a>
                    </li>
                  </b>
                  <br></br>
                  <b>
                    <label htmlFor="description">DESCRIPTION </label>
                  </b>
                  <b>
                    <li>{this.state.data.description}</li>
                  </b>
                  <br></br>
                  <b>
                    <label htmlFor="awards">AWARDS </label>
                  </b>
                  <b>
                    <li>{this.state.data.awards}</li>
                  </b>{" "}
                </ul>{" "}
              </center>
              <br></br>

              <div className="card-body">
                <center>
                  {" "}
                  <Button
                    type={"submit"}
                    classname={"btn btn-warning"}
                    value={"Update Info"}
                    onsubmit={this.updateSelect}
                  />
                  <Button
                    type={"submit"}
                    classname={"btn btn-danger"}
                    value={"Delete Profile"}
                    onsubmit={this.DeleteSelect}
                  />
                  <Button
                    type={"submit"}
                    classname={"btn btn-danger"}
                    value={"Logout"}
                    onsubmit={this.logout}
                  />
                </center>
              </div>
            </div>
          </div>
        )}

        {wrkS ? (
          <div>
            <center>
              <h1>
                <Button
                  type={"submit"}
                  classname={"btn btn-success"}
                  value={"Workshops"}
                  onsubmit={this.workshopSelect}
                />
              </h1>
            </center>
          </div>
        ) : (
          <div></div>
        )}

        {research ? (
          <div>
            <br />
            <center>
              <Button
                type={"submit"}
                classname={"btn btn-success"}
                value={"See my Researches"}
                onsubmit={this.researchSelect}
              />
            </center>
          </div>
        ) : (
          <div></div>
        )}

        <div></div>
      </div>
    );
  }
}
