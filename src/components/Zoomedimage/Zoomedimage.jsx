import React, { Component } from "react";
import "./Zoomedimage.css";

class Zoomedimage extends Component {
  componentWillReceiveProps() {
    document.getElementById("enlargedImg").classList.remove("hide-img");
  }

  render() {
    return (
      <div
        id="enlargedImg"
        className="enlargedImg hide-img"
        onClick={() => {
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
          className="modal-image"
          id="modalImg"
          src={this.props.imgUrl}
          alt="img"
          onLoad={() => {
            document.getElementById("modalImg").classList.add("fade-in-img");
          }}
        />
      </div>
    );
  }
}

export default Zoomedimage;
