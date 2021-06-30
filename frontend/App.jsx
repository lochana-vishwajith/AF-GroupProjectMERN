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
import AddCommiteeMembers from "./Components/AddCommiteeMembers/addCommiteeMembers";
import Login from "./Components/LoginComponents/login"
import myProfile from "./Components/MyProfileComponents/myProfile";
import updateProfile from "./Components/updateProfileComponent/updateProfile";
import Payments from "./Components/PaymentComponent/paymentForm"
import ChooseReg from "./Components/RegistrationCards/RegistrationCards"
import workshopHosters from "./Components/getWorkshopHostersComponent/workshopHosters";
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            user:'nuser'
        }
    }
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                    <Route exact path = '/' component = {Home}/>
                    <Route exact path = '/homePageConfig' component = {HomePageConfig}/>
                    <Route exact path= '/aRegistration' component={AttendeeReg}/>
                    <Route exact path = '/addComMembers' component = {AddCommiteeMembers}/>
                    <Route exact path= '/uRegistration' component={Registration}/>
                    <Route exact path= '/login' component={Login}/>
                    <Route exact path='/profile' component={myProfile}/>
                    <Route exact path='/updateProfile' component={updateProfile}/>
                    <Route exact path= '/pay' component={Payments}/>
                    <Route exact path= '/chooseReg' component={ChooseReg}/>
                    <Route exact path='/getWorkshopusers' component={workshopHosters}/>
                    </Switch>
                </Router>

            </div>
        )
    }
}
