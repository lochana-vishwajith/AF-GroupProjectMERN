import React, { Component } from "react";
import Button from "../ButtonComponent/buttonComponent";
import Header from "../HeaderComponent/header";
import axios from "axios";

const initialState = {
  researchTitle: "",
  researchField: "",
  researchYear: "",
  coAuthors: "",
  fileURL: "",
  isApproved: "",
  dataArray: [],
};

export default class researchReviewerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.approveResearch = this.approveResearch.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/researchDetails/getResearchDetails")
      .then((response) => {
        console.log("Response data: ", response.data.data);
        this.setState({ dataArray: response.data.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  approveResearch() {}

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="card">
            <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
              All Research Paper Uploads
            </h3>

            <div className="card mb-3 p-3">
              <div className="card-body">
                <div id="table" className="table-editable">
                  <span className="table-add float-right mb-3 mr-2">
                    <a href="#!" className="text-success">
                      <i className="fas fa-plus fa-2x" aria-hidden="true"></i>
                    </a>
                  </span>
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
                              {item.researchYear}
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
                                    this.approveResearch(item._id)
                                  }
                                >
                                  Approve
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
