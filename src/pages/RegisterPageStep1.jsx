import React, { Component } from "react";
import Register from '../components/register/Register'
import PayCard from '../components/register/PayCard'
import Progressbar from '../components/progressbar/Progressbar'

class RegisterPageStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      maxSteps: 2
    }
  }


  render() {
    const { step, maxSteps } = this.state;
    return (
      <article className="container">
        <div className="register-page-global-container">
          <h1>Registrarme</h1>
          <Progressbar step={step} maxSteps={maxSteps}/>
            <Register  history={this.props.history} location={this.props.location} handleClickContinue={this.changeStep} />
        </div>
      </article>
    );
  }
}

export default RegisterPageStep1;
