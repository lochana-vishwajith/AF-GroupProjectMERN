import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import firebase from "firebase";
import { storage } from "../../firebase/index";
import WHeader from '../WorkShopHeader/workshopHeader.js'

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
    //this.handlerChangeFiles = this.handlerChangeFiles.bind(this);

    this.handleChange = this.handleChange.bind(this);
    //  this.handleSave = this.handleSave.bind(this);
    // this.saveDetails = this.saveDetails.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    let bucketName = "WorkshopTemplate";
    let file = this.state.files[0];
    let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
    storageRef.put(file);

    let workshop = {
      wsName: this.state.wsName,
      wsDate: this.state.wsDate,
      wsDescription: this.state.wsDescription,
      wsPresentorName: this.state.wsPresentorName,
      wsPresentorDescription: this.state.wsPresentorDetails,
      url: this.state.url,
    };

    const id = "60d94e35a02d1b2730c10440";

    axios
      .post(`http://localhost:5000/workshops/postws/${id}`, workshop)
      .then((response) => {
        alert("Workshop inserted sucessfully !");
      })
      .catch((error) => {
        alert("ERROR - Data didnt send");
        console.log("Error - ", error.message);
      });
  }

  handleChange(file) {
    this.setState({ files: file });
  }

  render() {
    return (
      <div>
      <WHeader/>
      <div className="container">
        <h1>Add AddWorkshop</h1>

        <form onSubmit={this.onSubmit}>
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
              name="template"
              onChange={(e) => {
                this.handleChange(e.target.files);
              }}
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
