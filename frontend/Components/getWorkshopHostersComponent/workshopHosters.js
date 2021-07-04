import React, { Component } from "react";
import axios from "axios";
import "./workshopConductor.css";
import Header from "../HeaderComponent/header";
export default class workshopHosters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      wUsers: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/Users/getUsers")
      .then((res) => {
        const arr = [];
        res.data.map((r) => {
          if (r.category == "WorkshopConductor") {
            arr.push(r);
            this.setState({ wUsers: arr });
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { wUsers } = this.state;
    return (
      <div>
        <Header />
        {this.state.wUsers ? (
          <div>
            <div className="container">
              <div className="header-box">
                <h1>Workshop Hoster</h1>
              </div>

              <div className="hosterDiv">
                {this.state.wUsers.map((c) => {
                  return (
                    <div
                      className="shadow-lg p-3 mb-5 bg-white rounded"
                      key={c._id}
                      id="outerCard"
                    >
                      <div className="box-view">
                        <h1>{c.name}</h1>
                        <center>
                          <div className="pro-pic">
                            <img src={c.profilePic} className="img-thumbnail" />
                          </div>
                        </center>
                        <br />

                        <p>
                          <b>{c.description}</b>{" "}
                        </p>
                        <p>
                          <b>{c.awards}</b>{" "}
                        </p>
                        <a href={c.linkedIn}>
                          <i>click here to Linked In</i>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <h1>Sorry there is no Workshop Conductors</h1>
        )}
      </div>
    );
  }
}
