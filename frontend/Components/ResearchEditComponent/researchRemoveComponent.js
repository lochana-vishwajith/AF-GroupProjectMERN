
import React, { Component } from "react";
import TextInput from "../TextInputComponent/textInputComponent";
import Button from "../ButtonComponent/buttonComponent";
import axios from "axios";
import moment from "moment";
import RHeader from '../ResearcherHeader/header';

const initialState = {
  researchTitle: "",
  researchField: "",
  researchYear: "",
  coAuthors: "",
  fileURL: "",
  dataArray: [],
};

export default class researchRemoveComponent extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onRemove = this.onRemove.bind(this);
  }

  componentDidMount() {

    //const id = "60d82ca3b881ad7a64ce04f2";
    axios
      .get(`http://localhost:5000/researchDetails/userResearch/${sessionStorage.getItem('uid')}`)
      .then((response) => {
        console.log("Response data: ", response.data.data.research);
        this.setState({ dataArray: response.data.data.research });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  onRemove(id) {
    console.log(id);

    axios
      .delete(
        `http://localhost:5000/researchDetails/deleteResearchDetail/${id}`
      )
      .then((response) => {
        alert("Deleted Successfully!");
        console.log("Deleted Successfully!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  navigateToEditPage(e, researchID) {
    window.location = `/researchEditById/${researchID}`;
  }

  render() {
    return (
      <div>
        <RHeader />
        <div className="container">
          <div className="card">
            <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
              Edit Research Paper Details
            </h3>

            <div className="card mb-3 p-3">
              <div className="card-body">
                <div id="table" className="table-editable">
                  <table className="table table-bordered table-responsive-md table-striped text-center">
                    <thead>
                      <tr>
                        <th className="text-center">Research Title</th>
                        <th className="text-center">Research Field</th>
                        <th className="text-center">Research Year</th>
                        <th className="text-center">Research Author</th>
                      </tr>
                    </thead>
                    {this.state.dataArray.length > 0 &&
                      this.state.dataArray.map((item, index) => (
                        <tbody key={index}>
                          <tr>
                            <td
                              className="pt-3-half"
                              name="researchTitle"
                              onChange={this.onChange}
                            >
                              {item.researchTitle}
                            </td>
                            <td
                              className="pt-3-half"
                              name="researchField"
                              onChange={this.onChange}
                            >
                              {item.researchField}
                            </td>
                            <td
                              className="pt-3-half"
                              name={"researchYear"}
                              onChange={this.onChange}
                            >
                              {moment(item.researchYear).format("YYYY")}
                            </td>
                            <td
                              className="pt-3-half"
                              name={"coAuthors"}
                              onChange={this.onChange}
                            >
                              {item.coAuthors}
                            </td>
                            <td>
                              <span className="table-remove">
                                <button
                                  type="button"
                                  className="btn btn-primary btn-rounded btn-sm my-0"
                                  onClick={(e) =>
                                    this.navigateToEditPage(e, item._id)
                                  }
                                >
                                  Edit
                                </button>
                              </span>
                            </td>
                            <td>
                              <Button
                                type={"submit"}
                                classname={
                                  "btn btn-danger btn-rounded btn-sm my-0"
                                }
                                onsubmit={() => {
                                  this.onRemove(item._id);
                                }}
                                value={"Delete"}
                              />
                            </td>
                          </tr>
                        </tbody>
                      ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
