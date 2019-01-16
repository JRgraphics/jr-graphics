import React, { Component } from "react";
import "./Selfcontent.css";
import portrait from "../../assets/images/selfPortraitSmall.png";
import portraitMobile from "../../assets/images/mobileImages/selfmobile.png";

import Textbox from "../Textbox/Textbox";

class Selfcontent extends Component {
  constructor(props) {
    super(props);
    this.state = { imgHeight: 0, imgLeft: 0, infoTextWidth: 0 };
    // create a ref to store the textInput DOM element
    this.selfPortrait = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // let scrollTop = event.srcElement.body.scrollTop;
    // console.log(document.documentElement.scrollTop);

    const calculatedHeight = this.state.imgHeight;
    // console.log("scrolled past Header!");
    let percent = document.documentElement.scrollTop / calculatedHeight;
    const leftPos =
      -1 * window.innerWidth * 0.025 - window.innerWidth * 0.17 * percent;
    this.setState({ imgLeft: leftPos });
  };

  // 17.5vw

  render() {
    return (
      <div className="selfContentContainer">
        <div className="containerBoundaryBorder" />
        <picture>
          <source media="(min-width: 780px)" srcSet={portrait} />
          <img
            id="selfPortrait"
            className={"selfPortrait"}
            src={portraitMobile}
            alt="portrait"
            ref={el => (this.selfPortrait = el)}
            style={{ left: this.state.imgLeft }}
            onLoad={() => {
              this.setState({ imgHeight: this.selfPortrait.clientHeight });
              document
                .getElementById("selfPortrait")
                .classList.add("portraitSlideIn");
              setTimeout(() => {
                document
                  .getElementById("selfPortrait")
                  .classList.add("elementOpacityFull");
                document
                  .getElementById("selfPortrait")
                  .classList.remove("portraitSlideIn");
                this.setState({ imgLeft: window.innerWidth * -0.025 });
              }, 1300);
            }}
          />
        </picture>
        <div id="textBox" className="textBox">
          <Textbox
            text={
              "Hello there./n" +
              "Welcome to my portfolio./nMy name is Jere Rantalainen, Bachelor " +
              "of Science, Master's degree student in Tampere University and " +
              "currently working as Developer trainee at IBM."
            }
          />
        </div>
        <div className="containerBoundaryBorder containerBoundaryBorderBottom" />
      </div>
    );
  }
}

export default Selfcontent;
