import React, { Component } from "react";
import Plan from "../components/plans/Plan";


class PlansPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { history, location } = this.props;
    return (
      <article className="container">
        <div>
          <h1>Planes</h1>
          <ul>
              <li>
                  <Plan />
              </li>
              <li>
                  <Plan />
              </li>
              <li>
                  <Plan />
              </li>
          </ul>
        </div>
      </article>
    );
  }
}

export default PlansPage;
