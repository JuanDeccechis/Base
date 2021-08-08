import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Input from "../input/Input";
import Button from "../button/Button";
import "../login/login.css";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

class Recover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilityPassword: false,
      showMessageMailSended: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSendNewPassword = this.handleSendNewPassword.bind(this);
    this.changePath = this.changePath.bind(this);
  }

  handleSendNewPassword() {
    this.setState({ showMessageMailSended: true });
    let tis = this;
    setTimeout(function () { 
      tis.changePath() }, 5000);
  }

  changePath() {
    this.setState({ showMessageMailSended: false });
    let path = `/login`;
    this.props.history.push(path);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form
        action=""
        method="post"
        className="form-container login-form"
        onSubmit={this.handleSubmit}
      >
          <span>Te enviaremos un email con una nueva contraseña para que puedas ingresar.</span>
        <Input name={"email"} minLength="0" maxLength="20" type="mail">
          <AlternateEmailIcon className={`icon icon-color`} />
        </Input>
        {this.state.showMessageMailSended && 
          <div className="espaciado">
            <span>Te enviamos una nueva contraseña, utilizala para iniciar sesión</span>
          </div>
        }
        <div className="espaciado">
          <Button className="principal" handleClick={this.handleSendNewPassword} text="Recibir nueva contraseña" />
        </div>

        <div className="login-links-container espaciado">
          <NavLink to="/login" activeClassName="">
            <span>Iniciar sesión</span>
          </NavLink>
        </div>
      </form>
    );
  }
}

export default Recover;
