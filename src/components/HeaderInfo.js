import React, { Component } from "react";

class HeaderInfo extends Component {
  state = {};
  render() {
    return (
      <div className="text-secondary text-left mr-3">
        <div className="row">
          <span>By: André Felipe Costa (afelps9515@gmail.com)</span>
        </div>
        <div className="row">
          <span>Powered by: metaweather.com</span>
        </div>
      </div>
    );
  }
}

export default HeaderInfo;
