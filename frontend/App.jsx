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



import AddCommiteeMembers from "./Components/AddCommiteeMembers/addCommiteeMembers";



import DisplayComitteeMember from "./Components/DisplayComitteeMember/displayComitteeMember";
import DisplayMembersForEditor from "./Components/displayMembersForEditor/displayMembersForEditor";
import UpdateMember from "./Components/updateComitteeMembersComponent/updateMember";
import HomePageAcceptComponent from "./Components/HomePageAcceptComponent/HomePageAcceptComponent";
import ApplyHome from './Components/ApplyHomeContentComponent/ApplyHomeContent'
import AddTemplate from "./Components/AddTemplateComponent/AddTemplate";
import DisplayTemplate from "./Components/DisplayTemplateComponent/displayTemplate";
import TemplateDownload from './Components/TemplateRWDownloadComponent/downloadTemplate'
import Footer from "./Components/FooterComponent/footer";

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
                    <Route exact path = '/homePageAccept' component = {HomePageAcceptComponent}/>
                    <Route exact path = '/homecontent' component = {ApplyHome}/>
                    <Route exact path = '/addTemplate' component = {AddTemplate}/>
                    <Route exact path = '/displayTemplate' component = {DisplayTemplate}/>
                    <Route exact path = '/templatedownload/:type' component = {TemplateDownload}/>
                </Router>
                <Footer/>
            </div>
        )
    }
}
