import React, { Component } from "react";

class InputFieldSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: '',
      error: '',
      valid: '',
      showFieldset: false,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChangeInput(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
        value: value,
    });
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  handleBlur(event) {
      if (!event.target.value) {
          this.setState({showFieldset: false});
      }
      else  {
        this.setState({showFieldset: true});
      }
    this.validateInput(event);    
  }

  validateInput(event) {
      const { hasError } = this.props;
    let input = event.target;
    let name = event.target.name;
    let errorMessage = null;
    switch (true) {
      case !input.value:
        errorMessage = `Debes ingresar tu ${name}.`;
        break;
    case hasError:
        errorMessage = `${name} incorrecta.`;
        break;
      case input.minLength > -1 && input.value.length < input.minLength:
        errorMessage = `Tu ${name} debe contener al menos ${input.minLength} caracteres.`;
        break;
      case input.maxLength > -1 && input.value.length > input.maxLength:
        errorMessage = `Tu ${name} debe contener hasta ${input.maxLength} caracteres.`;
        break;
      default:
        errorMessage = null;
        break;
    }
    this.setState({ error: errorMessage, valid: !errorMessage });
  }

  render() {
    const { error, valid, showFieldset } = this.state;
    const { name, minLength, maxLength, type } = this.props;
    let childrenWithExtraProp = [];
    if (this.props.children) {
        childrenWithExtraProp = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                className: `${child.props.className} ${error ? "with-error error-text" : ''} ${showFieldset ? "with-fieldset" : ''}`
            });
          });
    }
    else {
        console.log("sin hijo");
    }
    return (
      <div className="input-icons">

        {showFieldset ?
        <fieldset aria-hidden="true" 
        className={`jss5 MuiOutlinedInput-notchedOutline ${
            error && "error"} ${valid && "valid"}`}>
                                <legend className="jss7">
                                    <span>{`${name}*`}</span>
                                </legend>
                                <div className= {`centered ${error && "error"}`}>
                                {this.props.children && 
        childrenWithExtraProp[0] }
        <input
          id={name}
          name={name}
          className={`input-with-padding ${
            error=== null ? "valid" : error ? "error" : ""}`}
          type={type}
          placeholder={`${name}*`}
          required
          minLength={minLength}
          maxLength={maxLength}
          value={this.state.value}
          onChange={this.handleChangeInput}
          onKeyPress={this.handleKeyPress}
          onBlur={this.handleBlur}
        />
        {childrenWithExtraProp[1] }
        {error && (
          <span className="error-text">{error}</span>
        )}
        </div>
        </fieldset>
        :
        <div className="centered">
                      {this.props.children && 
        childrenWithExtraProp[0] }
        <input
          id={name}
          name={name}
          className={`input-with-padding ${
            error=== null ? "valid" : error ? "error" : ""}`}
          type={type}
          placeholder={`${name}*`}
          required
          minLength={minLength}
          maxLength={maxLength}
          value={this.state.value}
          onChange={this.handleChangeInput}
          onKeyPress={this.handleKeyPress}
          onBlur={this.handleBlur}
        />
        {childrenWithExtraProp[1] }
        {error && (
          <span className="error-text">{error}</span>
        )}
        </div>
  }
      </div>
    );
  }
}

export default InputFieldSet;
