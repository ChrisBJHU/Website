import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import Grid from "@mui/material/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Main from "../../assets/Jonathan/JonathanPicture.png";
import FadeIn from "react-fade-in";
import Images from "../JonathanOld/Images";
import arrow from "../../assets/arrowClipart.png";
import { useNav } from "../../customHooks/useNav";
import useIntersection from "../../customHooks/useIntersection";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

const About = () => {
  const viewRef = useRef();
  const inViewport = useIntersection(viewRef, "0px");


  const background = {
    height: "100%",
    overflow: "hidden",
    paddingBottom: "250px",
  };

  const rightBox = {
    position: "relative",
    width: "55vw",
    height: "75vh",
    top: "175px",
    float: "left",
    backgroundColor: "#222629",
    padding: "8px 8px",
    borderRadius: "0 10px 10px 0",
  };

  const buttonHomeStyle = {
    marginBottom: "2%",
    position: "relative",
    left: "50%",
    height: "3rem",
    width: "12rem",
    textAlign: "center",
    border: "#fff solid 0.2rem",
    fontSize: "1rem",
    fontWeight: "bold",
    textDecoration: "none",
    transform: "translateX(-50%)",
    textTransform: "uppercase",
    backgroundColor: "transparent",
    color: "#fff",
    cursor: "pointer",
    marginTop: "3%",
    display: "inline-block",
    "&:hover": {
      opacity: 0.5,
    },
  };

  const listStyle = {
    listStyleImage: { arrow },
    color: "lightblue",
    overflow: "hidden",
    whitespace: "hidden",
    fontSize: "auto",
  };

  const aboutRef = useNav("About");

  return (
    <section ref={aboutRef} id="aboutContainer">
      <Images />
      <div>
       <button style={buttonHomeStyle} onClick = {() => window.location.href = "/#/homeJonathanOld"}> See Old Version of Website </button>
      </div>
      
      <div style={background} ref={viewRef}>
        <FadeIn delay={500} visible={inViewport}>
          <div style={{ opacity: inViewport ? 1 : 0 }}>
            <div style = {rightBox}>
              <div style = {{marginLeft: '2vw', maxWidth: '25.5vw', float: 'left'}}>
                <Carousel
                  autoPlay={false}
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={false}
                >
                  <img src={Main} alt="" />
                </Carousel>
              </div>
              <div style = {{float: 'right', width: '27vw'}}>
                <p style = {{color: 'lightblue'}}>
                  Hello! My name is Jonathan Bakhit and I'm currently an
                  Undergraduate at Johns Hopkins University. I've been programming
                  for over 6 years now, which all started with my fascination with
                  computer games such as Minecraft and Roblox.
                </p>

                <p  style = {{color: 'lightblue'}}>
                  I've always been interested in how technology can be used to solve
                  problems. Nowadays, I work in a research lab called Delineo which
                  is focused on the spread of diseases. My goals right now are to
                  expand my knowledge of the field and to learn more about the
                  technology behind it. I'm generally focused on Machine Learning
                  and it's applications in our modern world.
                </p>
                <Grid container style={{ display: "grid" }}>
              <p style={{ color: "white", textAlign: "center" }}>
                Some technologies and languages I have experience with are:
              </p>
                  <Grid
                    container
                    columns={16}
                    spacing={1}
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                  >
                    <Grid item xs={12} style={{ marginLeft: "10%" }}>
                      <li style={listStyle}>Java</li>
                      <li style={listStyle}>Python</li>
                      <li style={listStyle}>JavaScript</li>
                      <li style={listStyle}>C/C++</li>
                      <li style={listStyle}>C#</li>
                    </Grid>
                    <Grid item xs={12} style={{ margin: "auto" }}>
                      <li style={listStyle}>React</li>
                      <li style={listStyle}>x86 - 64 Assembly</li>
                      <li style={listStyle}>Android Studio/Flutter</li>
                      <li style={listStyle}>HTML/CSS</li>
                      <li style={listStyle}>Unity</li>
                    </Grid>
                  </Grid>
                  <p style={{ color: "white", textAlign: "center" }}>
                    Some of my favorite Hobbies are:
                  </p>
                  <Grid
                    container
                    columns={16}
                    spacing={1}
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                  >
                    <Grid item xs={12} style={{ marginLeft: "10%" }}>
                      <li style={listStyle}>Hiking</li>
                      <li style={listStyle}>Tennis</li>
                      <li style={listStyle}>Editing Artwork and Videos</li>

                    </Grid>
                    <Grid item xs={12} style={{ margin: "auto" }}>
                      <li style={listStyle}>Reading</li>
                      <li style={listStyle}>Working Out</li>
                      <li style={listStyle}>Computers</li>
                      <li style={listStyle}>Archery</li>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
