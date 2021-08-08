import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClickAfterValidations = this.handleClickAfterValidations.bind(this);
  }

  handleClickAfterValidations() {
    let errors = document.querySelectorAll(".error");
    let valids = document.querySelectorAll(".valid");
    let inputs = document.querySelectorAll(".input-with-padding"); 
    if (!errors || (errors.length === 0 && valids.length === inputs.length)) {
        this.props.handleClick();
    }
  }

  render(){
      return(
        <button className={this.props.className} onClick={this.handleClickAfterValidations}>{this.props.text}</button>
      )
  }
}

export default Button;