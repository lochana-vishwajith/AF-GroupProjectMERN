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
import DisplayComitteeMember from "./Components/DisplayComitteeMember/displayComitteeMember";
import DisplayMembersForEditor from "./Components/displayMembersForEditor/displayMembersForEditor";
import UpdateMember from "./Components/updateComitteeMembersComponent/updateMember";

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path = '/' component = {Home}/>
                    <Route exact path = '/homePageConfig' component = {HomePageConfig}/>
                    <Route exact path = '/addComMembers' component = {AddCommiteeMembers}/>
                    <Route exact path = '/displayComMembers' component = {DisplayComitteeMember}/>
                    <Route exact path = '/displayComMembersEditor' component = {DisplayMembersForEditor}/>
                    <Route exact path = '/updatemember/:id' component = {UpdateMember}/>
                </Router>
                <Footer/>
            </div>
        )
    }
}
