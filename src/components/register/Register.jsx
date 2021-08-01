import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Input from "../input/Input";
import InputFieldSet from "../input/InputFieldSet";
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
  }

  handleChangeVisibilityPassword() {
    this.setState({ visibilityPassword: !this.state.visibilityPassword });
  }

  handleSubmit(event) {
    console.log("cargando");
    event.preventDefault();
  }

  render() {
    const { visibilityPassword } = this.state;

    return (
      <form
        action=""
        method="post"
        className="form-container"
        onSubmit={this.handleSubmit}
      >
        <Input name={"usuario"} minLength="0" maxLength="20" type="text">
          <AccountCircleIcon className={`icon icon-color`} />
        </Input>
{/*        <Input name={"email"} minLength="0" maxLength="20" type="mail">
          <AlternateEmailIcon className={`icon icon-color`} />
    </Input>*/}
    <InputFieldSet name={"email"} minLength="0" maxLength="20" type="mail">
          <AlternateEmailIcon className={`icon icon-color`} />
    </InputFieldSet>
        Tu contraseña deberá tener como mínimo 8 caracteres, una minúscula, una mayúscula y un número.
        <InputFieldSet
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
        </InputFieldSet>

        
        <div className="espaciado">
          <NavLink to="/" activeClassName="">
            <button className="principal">Registrarme</button>
          </NavLink>
        </div>

        <div className="login-links-container espaciado">
          <NavLink to="/login" activeClassName="">
            <span>Ya tengo cuenta</span>
          </NavLink>
        </div>
      </form>
    );
  }
}

export default Register;
