import React, { Component } from "react";
import "./Zoomedimage.css";

class Zoomedimage extends Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: "loading" };
  }

  componentWillReceiveProps() {
    if (this.state.latestImg === this.props.imgUrl) {
      document.getElementById("enlargedImg").classList.remove("hide-img");
      document.getElementById("modalImg").classList.add("fade-in-img");
    }
  }

  handleImageLoaded = () => {
    this.setState({ imageStatus: "loaded" });
    document.getElementById("enlargedImg").classList.remove("hide-img");
    document.getElementById("modalImg").classList.add("fade-in-img");
  };

  render() {
    return (
      <div
        id="enlargedImg"
        className="enlargedImg noselect hide-img"
        onClick={() => {
          this.setState({ latestImg: this.props.imgUrl });
          document.getElementById("enlargedImg").classList.add("fade-out-img");
          setTimeout(() => {
            document.getElementById("enlargedImg").classList.add("hide-img");
            document
              .getElementById("enlargedImg")
              .classList.remove("fade-out-img");
          }, 300);
        }}
      >
        <img
          className="modal-image noselect"
          id="modalImg"
          src={this.props.imgUrl}
          alt="img"
          onLoad={this.handleImageLoaded.bind(this)}
        />
      </div>
    );
  }
}

export default Zoomedimage;
