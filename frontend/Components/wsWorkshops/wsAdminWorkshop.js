import React from "react";
import axios from "axios";
import Header from "../ReviewerHeaderComponent/ResearchHeader";

class wsAdminWorkshop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workshops: [],
      comment: "",
    };
    this.deleteWorkshop = this.deleteWorkshop.bind(this);
    this.onchange = this.onchange.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/workshops/getws")
      .then((response) => {
        this.setState({ workshops: response.data });
        //console.log("Data - ", response.data);
      })
      .catch((error) => {
        console.log("Error - ", error.message);
      });
  }

  deleteWorkshop(e) {
    axios
      .delete(`http://localhost:5000/workshops/deletews/${e}`)
      .then((response) => {
        alert("Workshop Deleted !");
        window.location = "/admin-workshops";
      })
      .catch((error) => {
        alert("Error - Workshop didnt deleted !");
        console.log("Error -", error);
      });
  }

  updateWorkshop(e, wsID) {
    // console.log(e);
    window.location = `/updateworkshop/${wsID}`;
  }

  approveWorkshop(e, wsID) {
    // console.log("wsID - ", wsID);
    console.log(e);

    e.target.disabled = true;
    const data = {
      status: true,
      comment: this.state.comment,
    };

    axios
      .put(`http://localhost:5000/workshops/updatews/${wsID}`, data)
      .then((response) => {
        alert("Workshop Approved");
        window.location = "/admin-workshops";
      })
      .catch((error) => {
        alert("Workshop didn't approved !");
        console.log(error.message);
      });
  }

  onchange(e) {
    this.setState({ comment: e.target.value });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1 style={{ color: "blue" }}>Admin page workshops</h1>
          <br />
          <br />

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Workshop Name</th>
                <th scope="col">Date</th>
                <th scope="col">Workshop Description</th>
                <th scope="col">Presentor Name</th>
                <th scope="col">Presentor Description</th>
              </tr>
            </thead>

            {this.state.workshops.map((workshop, index) => (
              <tbody key={index}>
                <tr>
                  <th scope="row">{workshop.wsName}</th>
                  <td>{workshop.wsDate}</td>
                  <td>{workshop.wsDescription}</td>
                  <td>{workshop.wsPresentorName}</td>
                  <td>{workshop.wsPresentorDescription}</td>
                  <td>
                    {" "}
                    <button
                      href="#"
                      className="btn btn-danger"
                      onClick={this.deleteWorkshop.bind(this, workshop._id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    {" "}
                    <a
                      //href="updateworkshop"
                      className="btn btn-primary"
                      onClick={(e) => this.updateWorkshop(e, workshop._id)}
                    >
                      Update
                    </a>
                  </td>

                  <td>
                    <input
                      disabled={workshop.comment == null ? false : true}
                      type="text"
                      name="comment"
                      className="form-control"
                      placeholder="Enter a comment"
                      onChange={this.onchange}
                    />
                  </td>

                  <td>
                    {" "}
                    <button
                      disabled={
                        workshop.status == true
                          ? (this.disabled = true)
                          : (this.disabled = false)
                      }
                      className="btn btn-success"
                      onClick={(e) => {
                        this.approveWorkshop(e, workshop._id);

                        //this.disabled = true;
                      }}
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default wsAdminWorkshop;
