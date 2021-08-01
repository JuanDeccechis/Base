import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Input from "../input/Input";
import "./login.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilityPassword: false,
      firstTry: true,
    };
    this.handleChangeVisibilityPassword =
      this.handleChangeVisibilityPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeVisibilityPassword() {
    this.setState({ visibilityPassword: !this.state.visibilityPassword });
  }

  handleSubmit(event) {
    const { firstTry } = this.state;
    console.log("cargando");
    if (firstTry) {
      event.preventDefault();
    }
    this.setState({ firstTry: false });
  }

  render() {
    const { visibilityPassword, firstTry } = this.state;

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

        <input
          type="checkbox"
          id="recordar"
          name="recordar"
          className="espaciado"
          value={false}
        />
        <label htmlFor="recordar"> Remember me</label>

        <div className="espaciado">
          <NavLink to="/" activeClassName="" onClick={this.handleSubmit}>
            <button className="principal">Acceder</button>
          </NavLink>
        </div>

        <div className="login-links-container espaciado">
          <NavLink to="/recoveryPassword" activeClassName="">
            <span>Olvidé mi clave</span>
          </NavLink>
          <div>
            <span>No tenés cuenta? </span>
            <NavLink to="/register" activeClassName="">
              <span>Registrate</span>
            </NavLink>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
