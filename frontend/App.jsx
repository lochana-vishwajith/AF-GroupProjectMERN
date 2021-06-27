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
import researchAddComponent from "./Components/ResearchDetailsAddComponent/researchAddComponent";
import researchRemove from "./Components/ResearchEditComponent/researchRemoveComponent";
import researchEdit from "./Components/ResearchEditComponent/researchEditComponent";

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                    <Route exact path = '/' component = {Home}/>
                    <Route exact path = '/homePageConfig' component = {HomePageConfig}/>
                    <Route exact path = '/addComMembers' component = {AddCommiteeMembers}/>
                    <Route exact path = '/researchAdd' component = {researchAddComponent} />
                    <Route exact path = '/researchEdit' component = {researchRemove} />
                    <Route exact path = '/:id' component = {researchEdit} />
                    </Switch>
                </Router>
                <Footer/>
            </div>
        )
    }
}
