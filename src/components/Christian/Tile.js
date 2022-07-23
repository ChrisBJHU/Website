import React, { Component } from "react";
import redirect from "../../assets/redirect.png";

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: props.link,
      title: props.title,
      desc: props.desc,
      hovered: false,
      clickable: props.clickable,
    };
  }

  onMouseEnter = () => {
    this.setState({ hovered: true });
  };

  onMouseLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    const boxStyle = {
      backgroundColor: this.state.hovered
        ? "rgba(52, 52, 52, 0.6)"
        : "rgba(52, 52, 52, 0.8)",
      width: "300px",
      height: "300px",
      borderRadius: "10px",
      cursor: this.state.clickable ? "pointer" : "default",
    };

    const titleStyle = {
      fontSize: "35px",
      fontFamily: "Helvetica",
      textAlign: "center",
      color: "#6BD0FF",
    };

    const textStyle = {
      fontSize: "15px",
      fontFamily: "Helvetica",
      marginLeft: "5px",
      marginRight: "5px",
      textAlign: "center",
      color: "#6BD0FF",
    };

    const iconStyle = {
      position: "relative",
      marginRight: "15px",
      height: "10%",
      float: "right",
      marginTop: "10px",
      backgroundColor: "transparent",
    };

    return this.state.clickable ? (
      <a
        href={this.state.link}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
      >
        <div
          onMouseOver={this.onMouseEnter}
          onMouseOut={this.onMouseLeave}
          className="tileC"
          style={boxStyle}
        >
          <img src={redirect} alt="" style={iconStyle} />
          <p style={titleStyle}> {this.state.title}</p>
          <p style={textStyle}> {this.state.desc}</p>
        </div>
      </a>
    ) : (
      <div
        onMouseOver={this.onMouseEnter}
        onMouseOut={this.onMouseLeave}
        style={boxStyle}
        className="tileC"
      >
        <p style={titleStyle}> {this.state.title}</p>
        <p style={textStyle}> {this.state.desc}</p>
      </div>
    );
  }
}
export default Tile;
