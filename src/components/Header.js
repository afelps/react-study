import React, { Component } from "react";
import HeaderTitle from "./HeaderTitle";
import HeaderInfo from "./HeaderInfo";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="navbar navbar-dark bg-dark justify-content-between">
        <HeaderTitle />
        <HeaderInfo />
      </div>
    );
  }
}

export default Header;
