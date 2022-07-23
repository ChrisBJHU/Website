import React, { Component } from "react";

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: props.link,
      title: props.title,
      desc: props.text,
      hovered: false,
      clickable: props.clickable,
      isMobile: props.isMobile,
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
        ? "rgba(32, 51, 84, 0.6)"
        : "rgba(32, 51, 84, 0.8)",
      borderRadius: "10px",
      cursor: this.state.clickable ? "pointer" : "default",
    };


    const titleStyle = {
      fontSize: "25px",
      fontFamily: "Helvetica",
      textAlign: "center",
      margin: "10px",
      paddingTop: "10px",
      color: "white",
    };

    const textStyle = {
      fontSize: "15px",
      fontFamily: "Helvetica",
      marginLeft: "5px",
      marginRight: "5px",
      textAlign: "center",
      color: "white",
      justifyContent: "center",
      display: "flex",
      flexFlow: "row",
      alignItems: "center",
      marginTop: "20%",
    };

    const iconStyle = {
      position: "relative",
      marginRight: "15px",
      height: "10%",
      float: "right",
      marginTop: "5px",
      borderRadius: "25%",
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
          className="tileJ"
          style={boxStyle}
        >
          <svg
            style={iconStyle}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            className="feather feather-external-link"
          >
            <title>External Link</title>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>{" "}
          <div style={titleStyle}> {this.state.title}</div>
          <div style={textStyle}> {this.state.desc}</div>
        </div>
      </a>
    ) : (
      <div
        onMouseOver={this.onMouseEnter}
        onMouseOut={this.onMouseLeave}
        style={boxStyle}
        className="tileJ"
      >
        <div style={titleStyle}> {this.state.title}</div>
        <div style={textStyle}> {this.state.desc}</div>
      </div>
    );
  }
}
export default Tile;
