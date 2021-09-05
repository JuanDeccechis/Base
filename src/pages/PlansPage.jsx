import React, { Component } from "react";
import Plan from "../components/plans/Plan";
import Button from "../components/button/Button";


class PlansPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [{
        id: 0, title: "Básico", description: "Por defecto", price: 0
      }, {
        id: 1, title: "Familiar", description: "Cubre 4 usuarios", price: 100
      }, {
        id: 2, title: "Premium", description: "Plan recomendado para mí", price: 250
      }],
      selected: JSON.parse(localStorage.getItem("plan")),
    }
  }

  handleSelectPlan = (id) => {
    const { plans } = this.state;
    this.setState({ selected: plans[id] });
  }

  handleSubmit = () => {
    const { plans, selected } = this.state;
    localStorage.setItem("plan", JSON.stringify(selected));
    let path = `/login/register/step2`;
    this.props.history.push(path);
  }

  render() {
    const { history, location } = this.props;
    const { plans, selected } = this.state;
    return (
      <article className="container">
        <div>
          <h1>Planes</h1>
          {plans &&
            <ul className="plans">
              {plans.map((plan, index) => (
                <li key={index}>
                  <Plan id={plan.id} selected={selected.id === plan.id} title={plan.title} description={plan.description} price={plan.price} handleClick={this.handleSelectPlan}/>
                </li>
              ))}
            </ul>
          }
          <div className="espaciado">
            <Button className="principal" handleClick={this.handleSubmit} text={`Aceptar`} />
          </div>
        </div>
      </article>
    );
  }
}

export default PlansPage;
