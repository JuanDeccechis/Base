import React, { Component } from "react";
import Recover from '../components/recover/Recover'

class RecoveryPasswordPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="container">
      <div className="recover-page-global-container">
        <h1>Recuperar mi clave</h1>
        <Recover />
      </div>
    </article>
    );
  }
}

export default RecoveryPasswordPage;
