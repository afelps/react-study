import React, { Component } from "react";

class Predicability extends Component {
  state = {};
  render() {
    return <span>Predicabilidade: {this.props.value}%</span>;
  }
}

export default Predicability;
