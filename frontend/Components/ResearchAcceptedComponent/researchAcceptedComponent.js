import React, { Component } from "react";
import Button from "../ButtonComponent/buttonComponent";
import RHeader from "../ResearcherHeader/header";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

const initialState = {
  researchTitle: "",
  researchField: "",
  researchYear: "",
  coAuthors: "",
  fileURL: "",
  isApproved: "",
  dataArray: [],
};
export default class researchAcceptedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/researchDetails/getAcceptedResearches")
      .then((response) => {
        console.log("Response data: ", response.data.data);
        this.setState({ dataArray: response.data.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <div>
        <RHeader />
        <div className="container">
          <div className="card">
            <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
              Accepted Research Papers
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
                            <td
                              className="pt-3-half "
                              name={"fileURL"}
                              // onChange={this.onChange}
                            >
                              <a href={item.fileURL}>
                                <i
                                  className="fas fa-file-download"
                                  id="acc-icon"
                                />
                              </a>
                            </td>
                            <td>
                              <span className="table-remove">
                                {item.isAccepted && (
                                  <button
                                    type="button"
                                    className="btn btn-danger btn-rounded btn-sm my-0"
                                    onClick={() => {
                                      // this.approveResearch(item._id, true);
                                      sessionStorage.setItem("Rid", item._id);
                                      window.location = "/pay";
                                    }}
                                  >
                                    Pay
                                  </button>
                                )}
                              </span>
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
