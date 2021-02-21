import React, { Component } from "react";

class Humidity extends Component {
  state = {};
  render() {
    return <span>Humidade: {this.props.value}%</span>;
  }
}

export default Humidity;
