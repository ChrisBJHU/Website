import React, {Component} from 'react';

class Split extends Component {

  state = {
    height: window.innerHeight,
    width: window.innerWidth,
  };

  componentDidMount () {
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const container = document.querySelector(".container");

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
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () =>{
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
        <div class="container" style = {this.state} >
          <div class="split left">
            <h1>Christian Bakhit</h1>
            <a href="homeChristian"class="button">Learn About Me!</a>
          </div>
        <div class="split right">
          <h1>Jonathan Bakhit</h1>
          <a href="homeJonathan" class="button">Learn About Me!</a>
        </div>
      </div>
    );
  }
}

export default Split;
