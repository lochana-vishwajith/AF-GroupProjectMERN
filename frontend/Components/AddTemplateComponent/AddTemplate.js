import "./AddTemplate.css";
import React, { Component } from "react";
import TextInput from "../TextInputComponent/textInputComponent";
import Button from "../ButtonComponent/buttonComponent";
import axios from "axios";
import { storage } from "../../firebase";
import EditorHeader from "../EditorHeader/editorHeader";

export default class AddTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RtemplateTitle: "",
      RtemplateFile: "",
      RspecialNotes: "",
      rTemplate: "",
      PtemplateTitle: "",
      PspecialNotes: "",
      PtemplateFile: "",
      pTemplate: "",
    };
    this.saveResearchTemplate = this.saveResearchTemplate.bind(this);
    this.saveWorkShopPresentation = this.saveWorkShopPresentation.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerChangeFiles = this.handlerChangeFiles.bind(this);
    this.submitResearch = this.submitResearch.bind(this);
    this.submitWorkShop = this.submitWorkShop.bind(this);
  }

  submitResearch() {
    const researchDetails = {
      templateTitle: this.state.RtemplateTitle,
      templateFile: this.state.RtemplateFile,
      specialNotes: this.state.RspecialNotes,
    };

    axios
      .post(`http://localhost:5000/researchTemplate`, researchDetails)
      .then(() => {
        alert("Research Paper Details Added");
        window.location.reload();
      })
      .catch((err) => {
        alert("Research Paper Details Not Added");
      });
  }

  submitWorkShop() {
    const workShop = {
      templateTitle: this.state.PtemplateTitle,
      templateFile: this.state.PtemplateFile,
      specialNotes: this.state.PspecialNotes,
    };
    axios
      .post("http://localhost:5000/workshopTemplate", workShop)
      .then(() => {
        alert("WorkShop Presenatation Template Added");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("WorkShop Presenatation Template Not Added");
      });
  }
  saveResearchTemplate() {
    const { rTemplate } = this.state;
    const date = Date.now();
    const uploadTask = storage
      .ref(`ResearchPaperTemplate/${date}_${rTemplate.name}`)
      .put(rTemplate);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("ResearchPaperTemplate")
          .child(`${date}_${rTemplate.name}`)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ RtemplateFile: url });
            setTimeout(this.submitResearch(), 1000);
          });
      }
    );
  }
  saveWorkShopPresentation() {
    const { pTemplate } = this.state;
    const date = Date.now();
    const uploadTask = storage
      .ref(`workShopPresentationTemplate/${date}_${pTemplate.name}`)
      .put(pTemplate);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("workShopPresentationTemplate")
          .child(`${date}_${pTemplate.name}`)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ PtemplateFile: url });
            setTimeout(this.submitWorkShop(), 1000);
          });
      }
    );
  }
  handlerChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handlerChangeFiles(e) {
    if (e.target.files[0]) {
      this.setState({ [e.target.name]: e.target.files[0] });
    }
  }

  render() {
    return (
      <div>
        <EditorHeader />
        <div className="container">
          <h3>Upload Conference Templates</h3>
          <hr />
          <br />
          <div className="addTemplateDiv">
            <div className="templateInnerDive">
              <div id="card" className="shadow p-5 mb-5 bg-white rounded">
                <h5>Upload Research Paper Template</h5>
                <hr />
                <br />
                <TextInput
                  type={"text"}
                  placeholder={"Enter Title"}
                  name={"RtemplateTitle"}
                  onchange={this.handlerChange}
                  id={"RtemplateTitle"}
                  fieldValue={"Tmaplate Title"}
                />
                <div>
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      Special Notes
                    </span>
                  </div>
                  <textarea
                    id="RspecialNotes"
                    name="RspecialNotes"
                    rows="6"
                    cols="53"
                    onChange={this.handlerChange}
                  ></textarea>
                </div>
                <TextInput
                  type={"file"}
                  placeholder={"Enter Title"}
                  name={"rTemplate"}
                  onchange={this.handlerChangeFiles}
                  id={"rTemplate"}
                  fieldValue={"Template Title"}
                />
                <center>
                  <Button
                    type={"button"}
                    classname={"btn btn-outline-dark"}
                    value={"Upload File"}
                    onsubmit={this.saveResearchTemplate}
                  />
                </center>
              </div>
            </div>
            <div className="templateInnerDive">
              <div id="card" className="shadow p-5 mb-5 bg-gray rounded">
                <h5>Upload WorkShop Presentation Template</h5>
                <hr />
                <br />
                <TextInput
                  type={"text"}
                  placeholder={"Enter Title"}
                  name={"PtemplateTitle"}
                  onchange={this.handlerChange}
                  id={"PtemplateTitle"}
                  fieldValue={"Template Title"}
                />
                <div>
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      Special Notes
                    </span>
                  </div>
                  <textarea
                    id="PspecialNotes"
                    name="PspecialNotes"
                    rows="6"
                    cols="53"
                    onChange={this.handlerChange}
                  ></textarea>
                </div>
                <TextInput
                  type={"file"}
                  placeholder={"Enter Title"}
                  name={"pTemplate"}
                  onchange={this.handlerChangeFiles}
                  id={"pTemplate"}
                  fieldValue={"Template Title"}
                />
                <center>
                  <Button
                    type={"button"}
                    classname={"btn btn-outline-dark"}
                    value={"Upload File"}
                    onsubmit={this.saveWorkShopPresentation}
                  />
                </center>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}
