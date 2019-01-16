import React, { Component } from "react";
import "./Gallerycontent.css";

import Galleryimg from "./Galleryimg/Galleryimg";
import Sliderbutton from "./Sliderbutton/Sliderbutton";

import img1 from "../../assets/images/melt_poster.png";
import img2 from "../../assets/images/CCCP_poster.png";
import img3 from "../../assets/images/avaruus_poster.png";
import img4 from "../../assets/images/ghetto_poster.png";
import img5 from "../../assets/images/jungle_poster.png";
import img6 from "../../assets/images/FWR_poster.png";

class Gallerycontent extends Component {
  state = {
    imgUrls: [
      { id: 1, imgUrl: img1 },
      { id: 2, imgUrl: img2 },
      { id: 3, imgUrl: img3 },
      { id: 4, imgUrl: img4 },
      { id: 5, imgUrl: img5 },
      { id: 6, imgUrl: img6 }
    ]
  };

  renderImg = () => {
    return <Galleryimg imgUrl={this.state.imgUrls[0].imgUrl} />;
  };
  renderSliderbutton = imgUrl => {
    return <Sliderbutton />;
  };

  render() {
    return (
      <div className="galleryContainer">
        <div className="containerBoundaryBorder" />
        {this.state.imgUrls.map(image => (
          <Galleryimg
            key={image.id}
            imgUrl={image.imgUrl}
            id={image.id}
            onGalleryImageClicked={() =>
              this.props.onZoomRequested(image.imgUrl)
            }
          />
        ))}
        <div className="containerBoundaryBorder" />
      </div>
    );
  }
}

export default Gallerycontent;
