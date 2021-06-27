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
import Footer from "./Components/FooterComponent/footer";
import AddCommiteeMembers from "./Components/AddCommiteeMembers/addCommiteeMembers";

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path = '/' component = {Home}/>
                    <Route exact path = '/homePageConfig' component = {HomePageConfig}/>
                    <Route exact path = '/addComMembers' component = {AddCommiteeMembers}/>
                </Router>
                <Footer/>
            </div>
        )
    }
}
