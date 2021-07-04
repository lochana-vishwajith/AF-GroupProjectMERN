import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import firebase from "firebase";
import { storage } from "../../firebase/index";
import WHeader from "../WorkShopHeader/workshopHeader.js";

const initialState = {
  wsName: "",
  wsDate: "",
  wsDescription: "",
  wsPresentorName: "",
  wsPresentorDetails: "",
  fileURL: "",
  files: "",
};
class wsAddWorkshop extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.tUpload = this.tUpload.bind(this);
    //this.handlerChangeFiles = this.handlerChangeFiles.bind(this);

    this.handleChange = this.handleChange.bind(this);
    //  this.handleSave = this.handleSave.bind(this);
    // this.saveDetails = this.saveDetails.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  tUpload(e) {
    e.preventDefault();
    const { files } = this.state;

    if (!files) {
      alert("Please Select a File First");
    } else {
      const date = Date.now();

      const uploadTask = storage
        .ref(`WorkshopTemplate/${date}_${files.name}`)
        .put(files);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("WorkshopTemplate")
            .child(`${date}_${files.name}`)
            .getDownloadURL()
            .then((url) => {
              this.setState({ fileURL: url });
              alert("File has uploaded");
              setTimeout(() => {
                this.onSubmit();
              }, 3000);
            });
        }
      );
    }
  }

  onSubmit() {
    let workshop = {
      wsName: this.state.wsName,
      wsDate: this.state.wsDate,
      wsDescription: this.state.wsDescription,
      wsPresentorName: this.state.wsPresentorName,
      wsPresentorDescription: this.state.wsPresentorDetails,
      url: this.state.fileURL,
    };

    const id = sessionStorage.getItem("uid");
    axios
      .post(`http://localhost:5000/workshops/postws/${id}`, workshop)
      .then((response) => {
        alert("Workshop inserted sucessfully !");
        window.location = "/workshops";
      })
      .catch((error) => {
        alert("ERROR - Data didnt send");
        console.log("Error - ", error.message);
      });
  }

  handleChange(e) {
    if (e.target.files[0]) {
      this.setState({ [e.target.name]: e.target.files[0] });
    }
  }

  render() {
    return (
      <div>
        <WHeader />
        <div className="container">
          <br />
          <h1>Add AddWorkshop</h1>

          <form onSubmit={this.tUpload}>
            <div className="mb-3">
              <label className="form-label">Workshop Name</label>
              <input
                type="text"
                className="form-control"
                name="wsName"
                onChange={this.onChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                name="wsDate"
                onChange={this.onChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                type="text"
                className="form-control"
                name="wsDescription"
                onChange={this.onChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Workshop Presentor</label>
              <input
                type="text"
                className="form-control"
                name="wsPresentorName"
                onChange={this.onChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Presentor's Description</label>
              <textarea
                type="text"
                className="form-control"
                name="wsPresentorDetails"
                onChange={this.onChange}
              />
            </div>

            {/* changes */}
            <div className="mb-3">
              <label className="form-label">template</label>
              <input
                type="file"
                className="form-control"
                id="template"
                name="files"
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default wsAddWorkshop;
