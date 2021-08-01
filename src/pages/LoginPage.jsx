import React, { Component } from "react";
import Login from "../components/login/Login";


class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="container">
        <div className="login-page-global-container">
          <h1>Acceder a mi cuenta</h1>
          <Login />
        </div>
      </article>
    );
  }
}

export default LoginPage;
