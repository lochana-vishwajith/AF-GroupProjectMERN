import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { notificationService } from "../NotificationServiceComponent/notificationService";

export default class notificationViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    this.subscription = notificationService
      .getMessage()
      .subscribe((notification) => {
        if (notification) {
          this.setState({
            notifications: [...this.state.notifications, notification],
          });
        } else {
          this.setState({ notifications: [] });
        }
      });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    const { notifications } = this.state;
    return (
      <Router>
        <div>
          <h4>Notifications</h4>
          {notifications.map((notification, index) => (
            <div key={index} className="alert alert-success">
              <p>{notification.text}</p>
            </div>
          ))}
        </div>
      </Router>
    );
  }
}
