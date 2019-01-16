import React, { Component } from "react";
import "./Webdesigncontent.css";
import blackbox from "../../assets/images/blackbox.png";

import LPlogo from "../../assets/images/lpterapia.png";

class Webdesigncontent extends Component {
  state = {};
  render() {
    return (
      <div className="webDesignContainer">
        <div className="containerBoundaryBorder" />
        <div className="textOutline">
          <div className="webDesignInfo">
            This site was created using{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="reactLink"
              href="https://reactjs.org/"
            >
              ReactJS
            </a>{" "}
            as a part of my current exodus on mastering Javascript. I have also
            done previsously other web design projects, which you can check out
            from following links: <br />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="reactLink"
            href="http://www.lahdenpsykoterapia.fi/"
          >
            <img className="webDesignLogo" src={LPlogo} alt="img" />
          </a>
          <img className="blackBox box1" src={blackbox} alt="img" />
          <img className="blackBox box2" src={blackbox} alt="img" />
          <img className="blackBox box3" src={blackbox} alt="img" />
          <img className="blackBox box4" src={blackbox} alt="img" />
        </div>
        <div className="containerBoundaryBorder" />
      </div>
    );
  }
}

export default Webdesigncontent;
