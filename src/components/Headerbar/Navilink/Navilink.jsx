import React, { Component } from "react";
import "./Navilink.css";

class Navilink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name
    };
  }

  render() {
    return (
      <div
        className="naviLink noselect"
        onClick={() => this.props.onLinkClicked(this.props.name)}
      >
        {this.props.name}
      </div>
    );
  }
}

export default Navilink;
