import React, { Component } from "react";
import "./Galleryimg.css";

class Galleryimg extends Component {
  render() {
    return (
      <img
        id={this.props.id}
        className="galleryImg"
        src={this.props.imgUrl}
        alt="img"
        onLoad={ () => {
          document.getElementById(this.props.id).classList.add('fadeInGalleryImg');
        }}
        onClick={() => this.props.onGalleryImageClicked(this.props.imgUrl)}
      />
    );
  }
}

export default Galleryimg;
