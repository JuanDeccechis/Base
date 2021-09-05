import React, { Component } from "react";
import Register from "../components/register/Register";
import PayCard from "../components/register/PayCard";
import Progressbar from "../components/progressbar/Progressbar";

class RegisterPageStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 2,
      maxSteps: 2,
    };
  }

  render() {
    const { step, maxSteps } = this.state;
    return (
      <article className="container">
        <div className="register-page-global-container">
          <h1>Registrarme</h1>
          <Progressbar step={step} maxSteps={maxSteps} />
          <PayCard
            history={this.props.history}
            location={this.props.location}
            handleLoggin={this.props.handleLoggin}
          />
        </div>
      </article>
    );
  }
}

export default RegisterPageStep2;
