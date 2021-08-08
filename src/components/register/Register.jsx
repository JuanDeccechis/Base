import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Input from "../input/Input";
import InputFieldSet from "../input/InputFieldSet";
import Button from "../button/Button";
import "../login/login.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilityPassword: false,
    };
    this.handleChangeVisibilityPassword =
      this.handleChangeVisibilityPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changePath = this.changePath.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmit(event) {
    if (event){
    event.preventDefault();
    event.stopPropagation();
    }
    this.changePath();
  }

  changePath() {
    let path = `/login/register/step2`;
    this.props.history.push(path);
  }

  handleChangeVisibilityPassword() {
    this.setState({ visibilityPassword: !this.state.visibilityPassword });
  }

  handleSubmitForm(event) {
    if (event){
      event.preventDefault();
      event.stopPropagation();
    }
  }

  render() {
    const { visibilityPassword } = this.state;
    return (
      <form
        action=""
        method="post"
        className="form-container login-form"
        onSubmit={this.handleSubmitForm}
      >
        <div className="login-form-container">
        <Input name={"usuario"} minLength="0" maxLength="20" type="text">
          <AccountCircleIcon className={`icon icon-color`} />
        </Input>
{/*        <Input name={"email"} minLength="0" maxLength="20" type="mail">
          <AlternateEmailIcon className={`icon icon-color`} />
    </Input>*/}
    <Input name={"email"} minLength="0" maxLength="20" type="mail">
          <AlternateEmailIcon className={`icon icon-color`} />
    </Input>
    <div className="espaciado"><div className="separacion"></div></div>
    <div className="espaciado">
        <span>Tu contraseña deberá tener como mínimo 8 caracteres, una minúscula, una mayúscula y un número.
        </span>
        </div>
        <Input
          name={"contraseña"}
          minLength="8"
          maxLength="20"
          type={visibilityPassword ? "text" : "password"}
        >
          <LockOpenIcon className={`icon icon-color`} />
          {visibilityPassword ? (
            <VisibilityOffIcon
              className={`icon icon-color right `}
              onClick={this.handleChangeVisibilityPassword}
            />
          ) : (
            <VisibilityIcon
              className={`icon icon-color right`}
              onClick={this.handleChangeVisibilityPassword}
            />
          )}
        </Input>

        
        <div className="espaciado">
          <Button className="principal" handleClick={this.handleSubmit} text="Continuar"/>
        </div>

        <div className="login-links-container espaciado">
          <NavLink to="/login" activeClassName="">
            <span>Ya tengo cuenta</span>
          </NavLink>
        </div>
        </div>
      </form>
    );
  }
}

export default Register;
