import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Input from "../input/Input";
import Button from "../button/Button";
import "./login.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilityPassword: false,
      firstTry: true,
      remember: false,
    };
    this.handleChangeVisibilityPassword =
      this.handleChangeVisibilityPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleChangeVisibilityPassword() {
    this.setState({ visibilityPassword: !this.state.visibilityPassword });
  }

  handleSubmit(event) {
    if (event){
    event.preventDefault();
    event.stopPropagation();
    }
    this.changePath();
    this.setState({ firstTry: false });
  }

  handleSubmitForm(event){
    if (event){
    event.preventDefault();
    event.stopPropagation();
    }
    this.setState({ firstTry: false });
  }

  changePath() {
    let path = `/`;
    this.props.history.push(path);
  }

  render() {
    const { visibilityPassword, firstTry, remember } = this.state;
    return (
      <form
        action=""
        method="post"
        className="form-container login-form"
        onSubmit={this.handleSubmitForm}
      >
        <div className="login-form-container">
        en web que sea un card 3d
        <Input name={"usuario"} minLength="0" maxLength="20" type="text">
          <AccountCircleIcon className={`icon icon-color`} />
        </Input>
        <Input
          name={"contraseña"}
          hasError={firstTry}
          type={visibilityPassword ? "text" : "password"}
        >
          <LockOpenIcon className={`icon icon-color`} />
          {visibilityPassword ? (
            <VisibilityOffIcon
              className={`icon icon-color right`}
              onClick={this.handleChangeVisibilityPassword}
            />
          ) : (
            <VisibilityIcon
              className={`icon icon-color right`}
              onClick={this.handleChangeVisibilityPassword}
            />
          )}
        </Input>
        <div className="espaciado login-links-container">
        <div
          className="checkbox-container"
          onClick={() => {
            this.setState({ remember: !this.state.remember });
          }}
        >
          {remember ? (
            <CheckCircleIcon className={`icon-color`} />
          ) : (
            <div className="checkbox-circle" />
          )}
          <label htmlFor="checkbox" className="checkbox-label">
            Recuerdame
          </label>
        </div>
        <div>
        <NavLink
          to="/login/recoveryPassword"
          className="forgot-password"
          activeClassName=""
        >
          <span>Olvidé mi clave</span>
        </NavLink>
        </div>
        </div>
        <div className="espaciado">
            <Button className="principal" handleClick={this.handleSubmit} text="Acceder" />
        </div>
        <div className="login-register-container espaciado">
          <div>
            <span>No tengo cuenta? </span>
            <NavLink to="/login/register/step1" activeClassName="">
              <span>Registrarme</span>
            </NavLink>
          </div>
        </div>
        </div>
      </form>
    );
  }
}

export default Login;
