import React, { Component } from "react";
import FormattedDate from "./FormattedDate";
import Humidity from "./Humidity";
import Predicability from "./Predicability";
import Temperature from "./Temperature";
import Wind from "./Wind";

class ForecastDay extends Component {
  state = {};
  render() {
    const {
      applicable_date,
      max_temp,
      min_temp,
      predictability,
      wind_direction_compass,
      wind_speed,
      humidity,
    } = this.props.value;

    return (
      <div className="container border p-3">
        <div className="row justify-content-center">
          <FormattedDate value={applicable_date} />
        </div>
        <div className="row justify-content-center">
          <Temperature max={max_temp} min={min_temp} />
        </div>
        <div className="row justify-content-center">
          <Humidity value={humidity} />
        </div>
        <div className="row justify-content-center">
          <Wind speed={wind_speed} direction={wind_direction_compass} />
        </div>
        <div className="row justify-content-center">
          <Predicability value={predictability} />
        </div>
      </div>
    );
  }
}

export default ForecastDay;
