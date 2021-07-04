import "./ApplyHomeContent.css";
import React, { Component } from "react";
import axios from "axios";
import Button from "../ButtonComponent/buttonComponent";
import Header from "../EditorHeader/editorHeader";
export default class ApplyHomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      currentContent: "",
      contentId: "",
      current: false,
    };
    this.setAsHomePage = this.setAsHomePage.bind(this);
    this.removeHomeStyle = this.removeHomeStyle.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/homePage/accepted`).then((res) => {
      console.log(res.data);
      this.setState({ content: res.data });
    });

    axios.get(`http://localhost:5000/content/`).then((res) => {
      console.log(res.data[0]);
      if (res.data[0]) {
        this.setState({ currentContent: res.data[0].contentId });
        this.setState({ contentId: res.data[0]._id });
        this.setState({ current: true });
      }
    });
  }

  setAsHomePage(Id) {
    const homeCurrent = {
      contentId: Id,
    };

    if (this.state.current) {
      alert("Please Remove the Existing Style For Home Page");
    } else {
      axios
        .post(`http://localhost:5000/content/`, homeCurrent)
        .then(() => {
          alert("Style Is Added");
          window.location.reload();
        })
        .catch((err) => {
          alert("Style Is Not Added");
          console.log(err);
        });
    }
  }
  removeHomeStyle(Id) {
    alert(Id);
    axios
      .delete(`http://localhost:5000/content/${Id}`)
      .then(() => {
        alert("Style Is Deleted");
        this.setState({ current: false });
        window.location.reload();
      })
      .catch((err) => {
        alert("Style Is Not Deleted");
        console.log(err);
      });
  }

  render() {
    const { content, current, currentContent } = this.state;
    return (
      <div>
        <Header />

        <div className="container">
          <div>
            <h3>Current Home Page Style</h3>
            <hr />
            <br />
            {current ? (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{currentContent.confName}</h5>
                  <p className="card-title">{currentContent.dateOfConf}</p>
                  <p className="card-title">{currentContent.venueOfConf}</p>

                  <div>
                    <Button
                      type={"submit"}
                      classname={"btn btn-outline-danger"}
                      value={"Remove Home Page Content"}
                      onsubmit={() =>
                        this.removeHomeStyle(this.state.contentId)
                      }
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="card">
                <div className="card-body">No Style Is Added For Home Page</div>
              </div>
            )}
          </div>
          <div>
            <h3>Available Home Page Style</h3>
            <hr />
            <br />
            {content.map((homeContent) => (
              <div className="card" key={homeContent._id}>
                <img
                  src={homeContent.imageUrl}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{homeContent.confName}</h5>
                  <p className="card-title">{homeContent.dateOfConf}</p>
                  <p className="card-title">{homeContent.venueOfConf}</p>
                  <p className="card-text">{homeContent.confDesc}</p>
                  <div>
                    <Button
                      type={"submit"}
                      classname={"btn btn-outline-success"}
                      value={"Set As Home Page Content"}
                      onsubmit={() => this.setAsHomePage(homeContent._id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
