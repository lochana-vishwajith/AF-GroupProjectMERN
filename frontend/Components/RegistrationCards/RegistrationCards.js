import React, { Component } from "react";
import Button from "../ButtonComponent/buttonComponent";
import "./RegCards.css";
import Header from "../HeaderComponent/header";
import Footer from "../FooterComponent/footer";

export default class RegistrationCards extends Component {
  constructor(props) {
    super(props);

    if (sessionStorage.getItem("token")) {
      alert("You have already registered");
      window.location = "/";
    }
    this.userRegistration = this.userRegistration.bind(this);
    this.attendeeRegistration = this.attendeeRegistration.bind(this);
  }

  userRegistration(e) {
    e.preventDefault();

    window.location = "/uRegistration";
  }

  attendeeRegistration(e) {
    e.preventDefault();
    window.location = "/AttendeeReg";
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="container">
          <div className={"header-name-box"}>
            <h1>Registration According to Your Needs</h1>
          </div>
          <center>
            <div className="card reg-card">
              <div className="reg-outer-box">
                <div className="reg-inner-box">
                  <div className="card-header">
                    <div className="img1"></div>
                  </div>
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus aliquam atque consequuntur cum cumque eveniet
                      fugiat ipsam magnam neque, nihil nobis non quas quia
                      repellendus saepe sit, temporibus voluptas. Repellendus.
                    </p>
                    <Button
                      type={"submit"}
                      classname={"btn btn-secondary btn-lg btn-block"}
                      value={"Host Registration"}
                      onsubmit={this.userRegistration}
                    />
                  </div>
                </div>
                <div className="reg-inner-box">
                  <div className="card-header">
                    <div className="img2"></div>
                  </div>
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet aspernatur culpa cum debitis earum eligendi et,
                      facere hic in maiores molestiae numquam officia provident
                      rerum sapiente soluta velit vitae voluptate.
                    </p>
                    <Button
                      type={"submit"}
                      classname={"btn btn-secondary btn-lg btn-block"}
                      value={"Attendee Registration"}
                      onsubmit={this.attendeeRegistration}
                    />
                  </div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}
