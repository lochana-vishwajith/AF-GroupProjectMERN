import React from "react";
import axios from "axios";
import Header from "../HeaderComponent/header";

class wsFinalWorkshops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workshops: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/workshops/finalws")
      .then((response) => {
        this.setState({ workshops: response.data });
        console.log("Data - ", response.data);
      })
      .catch((error) => {
        console.log("Error - ", error.message);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <br />
          <h1 style={{ color: "blue" }}>Approved workshops</h1>
          <hr />

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Workshop Name</th>
                <th scope="col">Date</th>
                <th scope="col">Workshop Description</th>
                <th scope="col">Presentor Name</th>
                <th scope="col">Presentor Description</th>
                <th> </th>
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
                    <a href={workshop.url}>
                      <button className="btn btn-primary">Download</button>
                    </a>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <br />
      </div>
    );
  }
}

export default wsFinalWorkshops;
