import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Plan extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        console.log("mounted");
    }

    componentWillUnmount() {
        console.log("unmounted");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("update");
    }

    render() {
        return(
            <div>
                <div className="plan-title">
                    title
                </div>
                <div className="plan-description">
description
                </div>
            </div>
        )
    }
}

export default Plan;