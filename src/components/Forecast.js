import React, { Component } from "react";
import ForecastDay from "./ForecastDay";

class Forecast extends Component {
  state = {
    loaded: false,
    forecasts: [],
  };

  componentDidMount() {
    this.updateWeather();
  }

  renderForcastDay = (forecastArray) => {
    return forecastArray.map((forecast) => (
      <div key={forecast.id} className="col">
        <ForecastDay value={forecast} />
      </div>
    ));
  };

  render() {
    return (
      <div className="container-fluid mt-3">
        <div className="row">{this.renderForcastDay(this.state.forecasts)}</div>
      </div>
    );
  }

  updateWeather = () => {
    fetch("https://www.metaweather.com/api/location/455827/", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({ forecasts: result.consolidated_weather.slice(0, 3) });
      });
  };
}

export default Forecast;
