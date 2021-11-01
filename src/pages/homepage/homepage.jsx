import React, { Component } from "react";

import "./homepage.scss";
import Directory from "../../components/directory/directory";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}

export default Homepage;
