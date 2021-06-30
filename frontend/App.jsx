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

import researchAddComponent from "./Components/ResearchDetailsAddComponent/researchAddComponent";
import researchRemove from "./Components/ResearchEditComponent/researchRemoveComponent";
import researchEdit from "./Components/ResearchEditComponent/researchEditComponent";
import AddCommiteeMembers from "./Components/AddCommiteeMembers/addCommiteeMembers";
import researchReviewerComponent from "./Components/ResearchReviewerComponent/researchReviewerComponent";
import researchAcceptedComponent from "./Components/ResearchAcceptedComponent/researchAcceptedComponent";
import notificationViewComponent from "./Components/NotificationViewComponent/notificationViewComponent";



import Login from "./Components/LoginComponents/login"
import myProfile from "./Components/MyProfileComponents/myProfile";
import updateProfile from "./Components/updateProfileComponent/updateProfile";
import Payments from "./Components/PaymentComponent/paymentForm"
import ChooseReg from "./Components/RegistrationCards/RegistrationCards"
import workshopHosters from "./Components/getWorkshopHostersComponent/workshopHosters";
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
                    <Route exact path = '/displayComMembers' component = {DisplayComitteeMember}/>
                    <Route exact path = '/displayComMembersEditor' component = {DisplayMembersForEditor}/>
                    <Route exact path = '/updatemember/:id' component = {UpdateMember}/>
                    <Route exact path = '/homePageAccept' component = {HomePageAcceptComponent}/>
                    <Route exact path = '/homecontent' component = {ApplyHome}/>
                    <Route exact path = '/addTemplate' component = {AddTemplate}/>
                    <Route exact path = '/displayTemplate' component = {DisplayTemplate}/>
                    <Route exact path = '/researchAdd' component = {researchAddComponent} />
                    <Route exact path = '/researchEdit' component = {researchRemove} />
                    <Route exact path = '/researchReview' component = {researchReviewerComponent} />
                    <Route exact path = '/researchAccepted' component = {researchAcceptedComponent} />
                    <Route exact path = '/noti' component = {notificationViewComponent} />
                    <Route exact path = '/:id' component = {researchEdit} />
                    <Route exact path = '/templatedownload/:type' component = {TemplateDownload}/>
                     </Switch>
                </Router>

            </div>
        )
    }
}
