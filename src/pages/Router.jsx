import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "../components/nav/Nav";
import LoginPage from "./LoginPage";
import RegisterPageStep1 from "./RegisterPageStep1";
import RegisterPageStep2 from "./RegisterPageStep2";
import TermAndConditionsPage from "./TermAndConditionsPage";
import RecoveryPasswordPage from "./RecoveryPasswordPage";
import PlansPage from "./PlansPage";
import FAQPage from "./FAQPage";
import HomePage from "./HomePage";

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter basename="/Base">
          <Nav isMobile={this.state.width >= 992 ? false : true}/>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/login/register/step1" component={RegisterPageStep1}></Route>
            <Route path="/login/register/step2" component={RegisterPageStep2}></Route>
            <Route path="/login/term-conditions" component={TermAndConditionsPage}></Route>
            <Route
              path="/login/recoveryPassword"
              component={RecoveryPasswordPage}
            ></Route>
            <Route path="/login" component={LoginPage}></Route>
            <Route
              path="/plans"
              component={PlansPage}
            ></Route>
            <Route
              path="/FAQ"
              component={FAQPage}
            ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
