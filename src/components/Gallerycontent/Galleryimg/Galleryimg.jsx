import React, { Component } from "react";
import "./Galleryimg.css";

class Galleryimg extends Component {
  render() {
    return (
      <picture>
        <source media="(min-width: 780px)" srcSet={this.props.imgUrl} />
        <img
          id={this.props.id}
          className="galleryImg opacityZero"
          src={this.props.imgMobile}
          alt="img"
          onLoad={() => {
            document
              .getElementById(this.props.id)
              .classList.remove("opacityZero");
          }}
          onClick={() => this.props.onGalleryImageClicked(this.props.imgUrl)}
        />
      </picture>
    );
  }
}

export default Galleryimg;
