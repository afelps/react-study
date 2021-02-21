import React, { Component } from "react";

class Wind extends Component {
  state = {};
  render() {
    const direction = this.props.direction;
    var speed = parseFloat(this.props.speed);
    speed = this.milesToKilometes(speed).toFixed(2);

    return (
      <div>
        <span>Velocidade: {speed}km/h</span>
        <span> </span>
        <span>Direção: {direction}</span>
      </div>
    );
  }

  milesToKilometes = (miles) => {
    return miles * 1.61;
  };
}

export default Wind;
