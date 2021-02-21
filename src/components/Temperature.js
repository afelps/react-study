import React, { Component } from "react";

class Temperature extends Component {
  state = {};
  render() {
    const min = parseFloat(this.props.min).toFixed(2);
    const max = parseFloat(this.props.max).toFixed(2);

    return (
      <div>
        <span>Min: {min}ºC</span>
        <span> </span>
        <span>Max: {max}ºC</span>
      </div>
    );
  }
}

export default Temperature;
