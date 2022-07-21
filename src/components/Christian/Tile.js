import React, { Component } from "react";
import redirect from "../../assets/redirect.png";

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: props.link,
      img: props.img,
      title: props.title,
      text: props.text,
      hovered: false,
      clickable: props.clickable ? false : true,
    };
    console.log(this.state.clickable);
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
        ? "rgba(52, 52, 52, 0.4)"
        : "rgba(52, 52, 52, 0.6)",
      height: "300px",
      width: "300px",
      borderRadius: "10px",
      borderStyle: "none",
      position: "center",
      boxSizing: "border-box",
      marginLeft: "auto",
      marginBottom: "15px",
      paddingBottom: "100px",
      cursor: this.state.clickable ? "pointer" : "default",
    };

    const titleStyle = {
      fontSize: "35px",
      fontFamily: "Helvetica",
      textAlign: "center",
      color: "#6BD0FF",
      marginTop: "-30px",
      backgroundColor: "transparent",
      textDecoration: "none",
    };

    const textStyle = {
      fontSize: "15px",
      fontFamily: "Helvetica",
      color: "#6BD0FF",
      marginLeft: "5px",
      marginRight: "5px",
      textAlign: "center",
      backgroundColor: "transparent",
    };

    const imageStyle = {
      height: "30%",
      backgroundColor: "transparent",
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
        className={"mr-auto text-center"}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
      >
        <div onMouseOver={this.onMouseEnter} onMouseOut={this.onMouseLeave}>
          <div className="tileC" style={boxStyle}>
            <img src={this.state.img} alt="" style={imageStyle} />
            <img src={redirect} alt="" style={iconStyle} />
            <p style={titleStyle}> {this.state.title}</p>
            <p style={textStyle}> {this.state.text}</p>
          </div>
        </div>
      </a>
    ) : (
      <div onMouseOver={this.onMouseEnter} onMouseOut={this.onMouseLeave}>
        <div style={boxStyle} className="tileC">
          <img src={this.state.img} alt="" style={imageStyle} />
          <p style={titleStyle}> {this.state.title}</p>
          <p style={textStyle}> {this.state.text}</p>
        </div>
      </div>
    );
  }
}
export default Tile;
