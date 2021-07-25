import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "../components/nav/Nav";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import RecoveryPasswordPage from "./RecoveryPasswordPage";
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
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/register" component={RegisterPage}></Route>
            <Route
              path="/recoveryPassword"
              component={RecoveryPasswordPage}
            ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
