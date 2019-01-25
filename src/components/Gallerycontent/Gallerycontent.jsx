import React, { Component } from "react";
import "./Gallerycontent.css";

import Galleryimg from "./Galleryimg/Galleryimg";

import img1 from "../../assets/images/release/melting.png";
import img2 from "../../assets/images/release/CCCP.png";
import img3 from "../../assets/images/release/avaruus.png";
import img4 from "../../assets/images/release/ghetto.png";
import img5 from "../../assets/images/release/jungle.png";
import img6 from "../../assets/images/release/FWR.png";
import img7 from "../../assets/images/release/disco.png";

import img1mobile from "../../assets/images/mobileImages/meltmobile.png";
import img2mobile from "../../assets/images/mobileImages/cccpmobile.png";
import img3mobile from "../../assets/images/mobileImages/avaruusmobile.png";
import img4mobile from "../../assets/images/mobileImages/ghettomobile.png";
import img5mobile from "../../assets/images/mobileImages/junglemobile.png";
import img6mobile from "../../assets/images/mobileImages/fwrmobile.png";
import img7mobile from "../../assets/images/mobileImages/discomobile.png";

class Gallerycontent extends Component {
  state = {
    imgUrls: [
      { id: 1, imgUrl: img1, imgMobile: img1mobile },
      { id: 2, imgUrl: img2, imgMobile: img2mobile },
      { id: 3, imgUrl: img3, imgMobile: img3mobile },
      { id: 4, imgUrl: img4, imgMobile: img4mobile },
      { id: 5, imgUrl: img5, imgMobile: img5mobile },
      { id: 6, imgUrl: img6, imgMobile: img6mobile },
      { id: 7, imgUrl: img7, imgMobile: img7mobile }
    ]
  };

  renderImg = () => {
    return <Galleryimg imgUrl={this.state.imgUrls[0].imgUrl} />;
  };

  render() {
    return (
      <div className="galleryContainer">
        <div className="containerBoundaryBorder" />
        {this.state.imgUrls.map(image => (
          <Galleryimg
            key={image.id}
            imgUrl={image.imgUrl}
            imgMobile={image.imgMobile}
            id={image.id}
            onGalleryImageClicked={() =>
              this.props.onZoomRequested(image.imgUrl)
            }
          />
        ))}
        <div className="containerBoundaryBorder containerBoundaryBorderBottom" />
      </div>
    );
  }
}

export default Gallerycontent;
