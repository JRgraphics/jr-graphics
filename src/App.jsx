import React, { Component } from "react";
import "./App.css";
import Headerbar from "./components/Headerbar/Headerbar";
import Selfcontent from "./components/Selfcontent/Selfcontent";
import Gallerycontent from "./components/Gallerycontent/Gallerycontent";
import Textbox from "./components/Textbox/Textbox";
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
  renderHeader = () => {
    return <Headerbar />;
  };
  renderSelfContent = () => {
    return <Selfcontent />;
  };
  renderGalleryContent = () => {
    return <Gallerycontent />;
  };
  renderTextbox = () => {
    return <Textbox />;
  };
  handleZoomRequest = imgUrl => {
    this.setState({ imgUrl: imgUrl });
  };

  render() {
    return (
      <div className="appContent">
        <Headerbar />
        <Selfcontent />
        <Gallerycontent onZoomRequested={this.handleZoomRequest} />
        <ZoomedImage imgUrl={this.state.imgUrl} />
        <Webdesigncontent />
        <Aboutmecontent />
      </div>
    );
  }
}

export default App;
