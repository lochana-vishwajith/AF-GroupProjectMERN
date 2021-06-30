import "./displayTemplate.css";
import React, { Component } from "react";
import TextInput from "../TextInputComponent/textInputComponent";
import Button from "../ButtonComponent/buttonComponent";
import Header from "../HeaderComponent/header";
import { Link } from "react-router-dom";

export default class displayTemplate extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <div className="container">
          <br />
          <div className="addTemplateDiv">
            <div className="templateInnerDive">
              <div id="card" className="shadow p-5 mb-5 bg-gray rounded">
                <h3>Research Paper Template</h3>
                <hr />
                <center>
                  <img
                    src="https://www.seekpng.com/png/detail/497-4974759_research-paper-icon-clipart-paper-research-computer-research.png"
                    className="rImg"
                  />
                  <br />
                  <br />
                  <Link to="/templatedownload/research">
                    <Button
                      type={"button"}
                      classname={"btn btn-outline-dark"}
                      value={"Go To Download Page"}
                    />
                  </Link>
                </center>
              </div>
            </div>
            <div className="templateInnerDive">
              <div id="card" className="shadow p-5 mb-5 bg-gray rounded">
                <h3>Presenatation Template</h3>
                <hr />
                <center>
                  <img
                    src="https://image.pngaaa.com/159/54159-middle.png"
                    className="rImgP"
                  />

                  <br />
                  <br />
                  <Link to="/templatedownload/workshop">
                    <Button
                      type={"button"}
                      classname={"btn btn-outline-dark"}
                      value={"Go To Download Page"}
                    />
                  </Link>
                </center>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
