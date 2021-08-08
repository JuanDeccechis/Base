import React, { Component } from "react";
import './progressbar.css'

class Progressbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
      const { step, maxSteps } = this.props;
      let containerWidth = 240;
      let dinamicWidth = (step / maxSteps) * containerWidth;
      return (
        <div className="progressbar-complete espaciado">
            <div className="container-progress" style={{width: containerWidth}}>
                <div className="progressbar" style={{width: dinamicWidth}}>
                </div>
            </div>
            <span>{step} / {maxSteps}</span>
        </div>
    )
  }
}

export default Progressbar;
