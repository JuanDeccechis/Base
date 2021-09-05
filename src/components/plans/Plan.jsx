import React, { Component } from "react";
import Button from "../button/Button";
import './plan.css'

class Plan extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        }
    }

  /*  componentDidMount() {
        console.log("mounted");
    }

    componentWillUnmount() {
        console.log("unmounted");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("update");
    }
*/
    handleSubmit = () => {
        this.props.handleClick(this.props.id);
    }

    render() {
        const { selected, title, description, price } = this.props;
        return(
            <div className={selected ? 'card selectedCard' : 'card'}>
                <div className="plan-title">
                    <span className="subtitle1">{title}</span>
                    <span className="price subtitle1">USD {price}</span>
                </div>
                <div className="plan-description">
                    <span>{description}</span>
                </div>
                <div className="espaciado">
                    {selected ? 
                    <Button className="principal" disabled text={`Plan ${title} elegido`} />
                    :
                    <Button className="principal" handleClick={this.handleSubmit} text={`Contratar ${title}`} />
                    }
                </div>
            </div>
        )
    }
}

export default Plan;