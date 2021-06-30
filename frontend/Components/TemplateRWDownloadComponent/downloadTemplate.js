import "./downloadTemplate.css";
import React, { Component } from "react";
import Header from "../HeaderComponent/header";
import axios from "axios";

export default class downloadTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: [],
    };
  }

  componentDidMount() {
    if (this.props.match.params.type === "research") {
      axios.get(`http://localhost:5000/researchTemplate`).then((res) => {
        console.log(res.data);
        this.setState({ templates: res.data });
      });
    } else if (this.props.match.params.type === "workshop") {
      axios.get(`http://localhost:5000/workshopTemplate`).then((res) => {
        console.log(res.data);
        this.setState({ templates: res.data });
      });
    }
  }
  render() {
    const { templates } = this.state;
    return (
      <div>
        <Header />
        <br />

        <div className="container">
          <br />
          {templates.map((details) => (
            <div className="shadow p-5 mb-5 bg-gray rounded">
              <div className="downloadOutter">
                <div>
                  <h4>{details.templateTitle}</h4>
                  <p>{details.specialNotes}</p>
                </div>
                <div>
                  <a href={details.templateFile}>
                    <i className="fas fa-file-download fa-3x" id="acc-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
