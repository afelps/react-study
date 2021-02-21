import React, { Component } from "react";
import Header from "./Header";
import Forecast from "./Forecast";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Forecast className="forecast-body" />
      </div>
    );
  }
}

export default App;
