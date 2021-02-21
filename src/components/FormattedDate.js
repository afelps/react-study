import React, { Component } from "react";

class FormattedDate extends Component {
  state = {};
  render() {
    return <span className="display-4">{this.props.value}</span>;
  }
}

export default FormattedDate;
