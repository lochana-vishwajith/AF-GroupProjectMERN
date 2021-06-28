import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
} from "react-router-dom";
import Home from "./Components/HomePageComponent/home";
import HomePageConfig from "./Components/HomePageConfigComponent/homePageConfig";
import Registration from "./Components/RegistrartionComponent/registration";
import AttendeeReg from "./Components/AttendeeRegistrationComponent/attendeeRegistration"
import Login from "./Components/LoginComponents/login"
export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                    <Route exact path = '/' component = {Home}/>
                    <Route exact path = '/homePageConfig' component = {HomePageConfig}/>
                    <Route exact path= '/aRegistration' component={AttendeeReg}/>
                    <Route exact path= '/uRegistration' component={Registration}/>
                    <Route exact path= '/login' component={Login}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
