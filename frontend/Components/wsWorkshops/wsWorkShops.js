import React from "react";
import axios from "axios";
import WHeader from "../WorkShopHeader/workshopHeader";
class wsWorkshops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workshops: [],
    };
    this.deleteWorkshop = this.deleteWorkshop.bind(this);
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
        window.location = "/workshops";
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

  render() {
    return (
      <div>
        <WHeader />
        <div className="container">
          <h1 style={{ color: "blue" }}>Workshops</h1>
          <br />
          <br />

          <table class="table">
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
                      style={{ float: "right" }}
                      //href="updateworkshop"
                      className="btn btn-primary"
                      onClick={(e) => this.updateWorkshop(e, workshop._id)}
                    >
                      Update
                    </a>
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

export default wsWorkshops;
