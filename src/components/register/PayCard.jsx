import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Input from "../input/Input";
import Button from "../button/Button";
import "./payCard.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PaymentIcon from '@material-ui/icons/Payment';
import CheckCircleIcon from "@material-ui/icons/CheckCircle";


class PayCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      termAccepted: false,
      showTextError: false,
      plan: JSON.parse(localStorage.getItem("plan")),
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changePath = this.changePath.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmit(event) {
    if (event){
    event.preventDefault();
    event.stopPropagation();
    }
    if (this.state.termAccepted) {
      localStorage.setItem("isLogged", "true");
      this.changePath();
    }
    else {
      this.setState({ showTextError: true });
    }
  }

  changePath() {
    this.props.handleLoggin();
    let path = `/`;
    this.props.history.push(path);
  }

  handleSubmitForm(event) {
    if (event){
      event.preventDefault();
      event.stopPropagation();
    }
  }
  render() {
    const { plan, termAccepted, showTextError } = this.state;
    return (
        <form
            action=""
            method="post"
            className="form-container login-form"
            onSubmit={this.handleSubmitForm}
        >
          <div className="login-form-container">
           {/* <Input name={"usuario"} minLength="0" maxLength="20" type="text">
            <AccountCircleIcon className={`icon icon-color`} />
    </Input> */}
              <div className="plan-title">
                <span className="subtitle1">Plan: {plan.title} </span>
                <span className="price subtitle1">Costo mensual: USD {plan.price}</span>
              </div>
              <div className="login-links-container espaciado">
              <NavLink to="/plans" activeClassName="">
                <span>Cambiar plan</span>
              </NavLink>
              </div>
            <Input
            name={"tarjeta"}
            placeholder="XXXX XXXX XXXX 1234"
            type="number"
            minLength={16}
            maxLength={16}
            className="creditCard"
            >
                <PaymentIcon className={`icon icon-color`} />
            </Input>
            <div className="espaciado login-links-container">
            <div
          className="checkbox-container term-conditions"
          onClick={() => {
            this.setState({ termAccepted: !this.state.termAccepted });
          }}
        >
          {termAccepted ? (
            <CheckCircleIcon className={`icon-color`} />
          ) : (
            <div className="checkbox-circle" />
          )}
          <label htmlFor="checkbox" className="checkbox-label term-conditions">
            <span>Acepto los </span>
            <NavLink to="/login/term-conditions" activeClassName="">
                <span>Términos y condiciones</span>
                </NavLink>
          </label>
          </div>
          </div>
          {showTextError &&
          <p className="error-text">Debes aceptar los Términos y condiciones para registrarte exitosamente.</p>
          }
            <div className="espaciado">
              <Button className={`principal`} disabled={!termAccepted} handleClick={this.handleSubmit} text="Acceder" />
            </div>
          </div>
        </form>
        );
  }
}

export default PayCard;
