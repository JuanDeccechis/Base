import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "../components/nav/Nav";
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import RecoveryPasswordPage from './RecoveryPasswordPage';

class Router extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">

                <BrowserRouter basename="/Base">
                    <Nav />
                    <Switch>
                        <Route path="/login" component={LoginPage}></Route>
                        <Route path="/register" component={RegisterPage}></Route>
                        <Route path="/recoveryPassword" component={RecoveryPasswordPage}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;
