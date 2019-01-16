import React, { Component } from "react";
// import ReactDOM from "react-dom";

import "./Headerbar.css";
import Navilink from "./Navilink/Navilink";

import JRlogo from "../../assets/images/JRlogo.png";
import logoBorder from "../../assets/images/logoBorder.png";

class Headerbar extends Component {
  state = {
    links: [
      { id: 1, name: "Home" },
      { id: 2, name: "Gallery" },
      { id: 3, name: "Web Design" },
      { id: 4, name: "About Me" }
    ]
  };

  componentDidMount() {
    this.addLinkFadeIn();
    setTimeout(() => {
      for (let i = 0; i < 4; ++i) {
        document
          .getElementsByClassName("naviLink") // eslint-disable-next-line
          [i].classList.add("opacityFull");
        document
          .getElementsByClassName("naviLink") // eslint-disable-next-line
          [i].classList.remove("fade-in");
      }
    }, 1700);
  }

  addLinkFadeIn = () => {
    setTimeout(() => {
      document.getElementsByClassName("naviLink")[0].classList.add("fade-in");
    }, 700);
    setTimeout(() => {
      document.getElementsByClassName("naviLink")[1].classList.add("fade-in");
    }, 500);
    setTimeout(() => {
      document.getElementsByClassName("naviLink")[2].classList.add("fade-in");
    }, 300);
    setTimeout(() => {
      document.getElementsByClassName("naviLink")[3].classList.add("fade-in");
    }, 100);
  };

  /*
  handleLinkClicked = linkName => {
    const selfContentHeight =
      window.innerHeight * 0.8 - (window.innerHeight * 0.04 + 2);
    const galleryContentHeight =
      window.innerHeight * 0.8 - window.innerHeight * 0.04 - 6;

    for (let i = 0; i < 4; ++i) {
      this.removeCurrentNaviLink(i);
    }
    if (linkName === "Home") {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      this.addCurrentNaviLink(0);
    }
    if (linkName === "Gallery") {
      
      if (window.innerWidth <= 780) {
        window.scroll({
          // calc(80vh - 4vh + 4px)
          // calc((80vh - 4vh - 2px) / 2);
          top: selfContentHeight / 2 - 2,
          left: 0,
          behavior: "smooth"
        });
      } else {
        window.scroll({
          // calc(80vh - 4vh + 4px)
          // calc((80vh - 4vh - 2px) / 2);
          top: selfContentHeight,
          left: 0,
          behavior: "smooth"
        });
      }
      
      this.addCurrentNaviLink(1);
    }
    if (linkName === "Web Design") {
      if (window.innerWidth <= 780) {
        window.scroll({
          // calc(80vh - 4vh - 4px);
          top: (selfContentHeight + galleryContentHeight + 4) / 2,
          left: 0,
          behavior: "smooth"
        });
      } else {
        window.scroll({
          // calc(80vh - 4vh - 4px);
          top: selfContentHeight + galleryContentHeight + 4,
          left: 0,
          behavior: "smooth"
        });
      }
      this.addCurrentNaviLink(2);
    }
    if (linkName === "About Me") {
      window.scroll({
        // (80vh - (4vh + 4px));
        top: (window.innerHeight * 0.8 - (window.innerHeight * 0.04 + 2)) * 3,
        left: 0,
        behavior: "smooth"
      });
      this.addCurrentNaviLink(3);
    }
    console.log(linkName + " clicked!");
  };

  addCurrentNaviLink = id => {
    document
      .getElementsByClassName("naviLink") // eslint-disable-next-line
      [id].classList.add("currentNaviLink");
  };

  removeCurrentNaviLink = id => {
    document
      .getElementsByClassName("naviLink") // eslint-disable-next-line
      [id].classList.remove("currentNaviLink");
  };
  */

  /*TODO:

  Add slider classes for borders based on the device width/height

  */

  render() {
    return (
      <div className="headerPage">
        <div className="headContainer">
          <div className="logoContainer">
            <img className="logoBorder" src={logoBorder} alt={"logoBorder"} />
            <img className="headerLogo" src={JRlogo} alt={"logo"} />
          </div>
          <div className="headerLinkBar">
            <div className="headerLinkBarSub">
              {this.state.links.map(link => (
                <Navilink
                  key={link.id}
                  onLinkClicked={() => this.props.onNaviRequested(link.name)}
                  name={link.name}
                  id={link.id}
                />
              ))}
            </div>
          </div>
          <div className="topBorder" />
          <div className="leftBorder" />
        </div>
        <div className="topRightFaderBox" />
      </div>
    );
  }
}

export default Headerbar;
