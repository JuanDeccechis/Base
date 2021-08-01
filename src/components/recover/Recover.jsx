import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Input from "../input/Input";
import "../login/login.css";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

class Recover extends Component {
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
    return (
      <form
        action=""
        method="post"
        className="form-container"
        onSubmit={this.handleSubmit}
      >
        <Input name={"email"} minLength="0" maxLength="20" type="mail">
          <AlternateEmailIcon className={`icon icon-color`} />
        </Input>
        <div className="espaciado">
          <NavLink to="/" activeClassName="">
            <button className="principal">Recibir nueva contraseña</button>
          </NavLink>
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
