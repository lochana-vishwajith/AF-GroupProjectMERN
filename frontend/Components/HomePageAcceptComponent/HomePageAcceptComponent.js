import "./HomePageAcceptComponent.css";
import React, { Component } from "react";
import axios from "axios";
import Button from "../ButtonComponent/buttonComponent";

export default class HomePageAcceptComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: [],
    };
    this.acceptContent = this.acceptContent.bind(this);
    this.declinecontent = this.declinecontent.bind(this);
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/homePage/pending`).then((res) => {
      console.log(res.data);
      this.setState({ home: res.data });
    });
  }
  acceptContent(Id) {
    const homeState = {
      status: "accepted",
    };
    axios.put(`http://localhost:5000/homePage/${Id}`, homeState).then(() => {
      alert("Content is Accepted");
      window.location.reload();
    });
  }
  declinecontent(id) {
    const ContentState = {
      status: "decline",
    };
    axios.put(`http://localhost:5000/homePage/${id}`, ContentState).then(() => {
      alert("Content is Declined");
      window.location.reload();
    });
  }

  render() {
    const { home } = this.state;
    return (
      <div className="container">
        {home.map((homeContent) => (
          <div className="card" key={homeContent._id}>
            <img
              src={homeContent.imageUrl}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{homeContent.confName}</h5>
              <p className="card-title">{homeContent.dateOfConf}</p>
              <p className="card-title">{homeContent.venueOfConf}</p>
              <p className="card-text">{homeContent.confDesc}</p>
              <div className="btnHome">
                <div>
                  <Button
                    type={"submit"}
                    classname={"btn btn-outline-success"}
                    value={"Accept"}
                    onsubmit={() => this.acceptContent(homeContent._id)}
                  />
                </div>
                <div>
                  <Button
                    type={"submit"}
                    classname={"btn btn-outline-danger"}
                    value={"Decline"}
                    onsubmit={() => this.declinecontent(homeContent._id)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    );
  }
}
