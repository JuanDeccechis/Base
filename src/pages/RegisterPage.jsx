import React, { Component } from "react";
import Register from '../components/register/Register'

class RegisterPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="container">
        <div className="register-page-global-container">
          <h1>Registrarme</h1>
          <Register />
        </div>
      </article>
    );
  }
}

export default RegisterPage;
