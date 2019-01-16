import React, { Component } from "react";
import "./Aboutmecontent.css";
import Textbox from "../Textbox/Textbox";

import linkedInImg from "../../assets/images/linkedin_logo.png";

class Aboutmecontent extends Component {
  state = {};

  scrollElementTop = () => {
    document.getElementsByClassName("aboutMeText")[0].scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <div className="aboutMeContainer">
        <div className="containerBoundaryBorder" />
        <div className="faderBarTop" />
        <div className="aboutMeText">
          <Textbox
            text={
              "/n" +
              "As I mentioned previously, I am currently a student at Tampere University, " +
              "studying Information and knowledge management. I've managed to stretch my studies " +
              "to 6.5 years now, but I am a Master's thesis away from graduation. " +
              "Even though my major is keenly focused on Information management & other related studies, " +
              "I was always interested in Information technology and software development. " +
              "That lead me to pick software systems for my B.Sc. minor and Software engineering for my Master's degree. " +
              "I believe that these studies have been essential on my way to make me truly understand the aspects of " +
              "software development, and to prepare myself to work in a real life working environments where " +
              "one needs to understand the other functionalities behind the Web development itself." +
              "/n" +
              "/n" +
              "As a developer, I have mainly used C++ as my main programming language within my studies, which has been " +
              "essential later on in my previously mentioned JsExodus. Especially when thinking about object oriented " +
              "programming, I believe that my education around C++ had given me a perfect starting point to begin my " +
              "potential career as a Web Developer a couple years ago." +
              "/n" +
              "Currently I'm working mainly with Angular 7, Node.js and React as my main development tools, and I'm " +
              "basically learning as much as I can as I go. Even though I just recently have started working with these " +
              "tools, I dare say that my expertise in them has become really great considering the timeframe. I am always " +
              "looking for opportunities to improve myself and after finishing one pet project, I'll probably just start to" +
              "tinker with another one." +
              "/n"
            }
          />
          <div className="socialNetworkHeadline">
            You can go check my LinkedIn -profile down below:
            <br />
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jere-rantalainen-26a1aab8/"
            >
              <img
                className="linkedInImg"
                src={linkedInImg}
                alt="img"
                onClick={() => {}}
              />
            </a>
          </div>
          <br />
          <div id="scrollTop" onClick={this.scrollElementTop}>
            Scroll Top
          </div>
          <br />
        </div>
        <div className="faderBarBot" />
        <div id="bottomBorder" className="containerBoundaryBorder" />
      </div>
    );
  }
}

export default Aboutmecontent;
