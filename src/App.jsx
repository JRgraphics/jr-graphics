import React, { Component } from "react";
import "./App.css";
import Headerbar from "./components/Headerbar/Headerbar";
import Selfcontent from "./components/Selfcontent/Selfcontent";
import Gallerycontent from "./components/Gallerycontent/Gallerycontent";
import ZoomedImage from "./components/Zoomedimage/Zoomedimage";
import Webdesigncontent from "./components/Webdesigncontent/Webdesigncontent";
import Aboutmecontent from "./components/Aboutmecontent/Aboutmecontent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: 0
    };
  }

  handleZoomRequest = imgUrl => {
    this.setState({ imgUrl: imgUrl });
  };

  handleNaviRequest = name => {
    console.log(document.getElementById("appContent").childNodes);
    if (name === "Home") {
      const el = document.getElementById("appContent").childNodes[1];
      el.scrollIntoView({ block: "end", behavior: "smooth" });
    } else if (name === "Gallery") {
      const el = document.getElementById("appContent").childNodes[2];
      el.scrollIntoView({ block: "end", behavior: "smooth" });
    } else if (name === "Web Design") {
      const el = document.getElementById("appContent").childNodes[3];
      el.scrollIntoView({ block: "end", behavior: "smooth" });
    } else if (name === "About Me") {
      const el = document.getElementById("appContent").childNodes[4];
      el.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  };

  render() {
    return (
      <div id="appContent" className="appContent">
        <Headerbar onNaviRequested={this.handleNaviRequest} />
        <Selfcontent id="selfContent" />
        <Gallerycontent
          id="galleryContent"
          onZoomRequested={this.handleZoomRequest}
        />
        <Webdesigncontent />
        <Aboutmecontent />
        <ZoomedImage imgUrl={this.state.imgUrl} />
      </div>
    );
  }
}

export default App;
