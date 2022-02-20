import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "../components/home";
import TrackDelivery from "../components/track-delivery";
import ManageUsers from '../components/manage-users';
import ManageBranch from '../components/manage-branch';
import ViewHistory from '../components/viewHistory';
import AllRequests from '../components/all-requests';

class AppRoute extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path="/track-delivery"><TrackDelivery /></Route>
                    <Route exact path="/manage-branch"><ManageBranch /></Route>
                    <Route exact path="/manage-users"><ManageUsers /></Route>
                    <Route exact path="/viewHistory"><ViewHistory /></Route>
                    <Route exact path="/all-requests"><AllRequests /></Route>
                </Switch>
            </Router>
        )
    }
}

export default AppRoute