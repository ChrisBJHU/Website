import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

class Split extends Component {
  state = {
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundColor: "transparent",
  };

  componentDidMount() {
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const container = document.querySelector(".container");

    if (!isMobile) {
      left.addEventListener("mouseenter", () => {
        container.classList.add("hover-left");
      });

      left.addEventListener("mouseleave", () => {
        container.classList.remove("hover-left");
      });

      right.addEventListener("mouseenter", () => {
        container.classList.add("hover-right");
      });

      right.addEventListener("mouseleave", () => {
        container.classList.remove("hover-right");
      });
    }
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    return !isMobile ? (
      <div className="container" style={this.state}>
        <div className="split left">
          <h1>Christian Bakhit</h1>
          <Link to="/homeChristian" className="button">
            Learn About Me!
          </Link>
        </div>
        <div className="split right">
          <h1>Jonathan Bakhit</h1>
          <Link to="/homeJonathan" className="button">
            Learn About Me!
          </Link>
        </div>
      </div>
    ) : (
      <div className="container" style={this.state}>
        <div className="splitMobile left">
          <h1>Christian Bakhit</h1>
          <Link to="/homeChristian" className="button">
            Learn About Me!
          </Link>
        </div>
        <div className="splitMobile right">
          <h1>Jonathan Bakhit</h1>
          <Link to="/homeJonathan" className="button">
            Learn About Me!
          </Link>
        </div>
      </div>
    );
  }
}
export default Split;
