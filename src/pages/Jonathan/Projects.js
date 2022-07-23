import FadeIn from "react-fade-in";
import React, { useRef } from "react";
import Tile from "../../components/Jonathan/Tile";
import Grid from "@mui/material/Grid";
import { useNav } from "../../customHooks/useNav";
import useIntersection from "../../customHooks/useIntersection";
import { useEffect } from "react";
import {isMobile} from 'react-device-detect';

const Projects = () => {
  const Projref = useRef();
  const inViewport = useIntersection(Projref, "0px");
  const projectRef = useNav("Projects");

  const gridStyle = {
    height: "100%",
    width: "100%",
    opacity: inViewport ? 1 : 0,
    justifyContent: "center",
    alignItems: "center",
    transition: "opacity 1s ease-in-out",
    backgroundColor: "#223882",
  };

  const tileStyle = {
    opacity: inViewport ? 1 : 0,
    padding: "0px 8px",
    borderRadius: "5px",
    border: "1px solid none #222629",
  };

  useEffect(() => {
    const color = "#223882";
    document.body.style.backgroundColor = color;
  }, [inViewport]);

  const projects = () => {
    if(!isMobile) {
      return (
        <Grid container spacing={1} style={gridStyle}>
          <Grid item style={tileStyle}>
            <FadeIn delay={1500} transitionDuration={500} visible={inViewport}>
              <Tile
                link="https://hub.jhu.edu/2021/08/12/anytown-usa-simulator/"
                title="AnyTown, USA"
                text="The Unity Project that was created with Christian Bakhit and I for the purposes of Delineo. With this simulation, we hope to better gardner interest into the workings of Delineo and give policymakers an interactive 'game' for which to gain critical information."
              />
              <Tile
                link="https://covidweb.isi.jhu.edu/"
                title="Delineo Modeling Project"
                text="Delineo is where I currently work as a Researcher and Developer. At Delineo, I help create revolutionary new COVID simulations for law makers to use. Currently, I serve as Team Leader for the Fullstack team and Product Owner of the Unity Project."
              />
            </FadeIn>
          </Grid>
          <Grid item style={tileStyle}>
            <FadeIn delay={1500} transitionDuration={500} visible={inViewport}>
              <Tile
                link="https://github.com/ChrisBJHU/DiscordBot"
                title="Gemini Discord Bot"
                text="A discord bot implemented in Python that serves as a private service to provide contest problems for students interested in Science Bowl."
              />
              <Tile
                link="https://github.com/ChrisBJHU/CovidTracker2020"
                title="Covid Tracker (HopHacks 2020)"
                text="An Hackathon Project that was built with a team of 4 people in a limited time-frame. This project sought to give users information about COVID and allow them to have a private tracing list. Used WordPress and Python."
              />
            </FadeIn>
          </Grid>
          <Grid item style={tileStyle}>
            <FadeIn delay={1500} transitionDuration={500} visible={inViewport}>
              <Tile
                title="Traffic Light Simulator"
                text="A traffic light simulator that was built with Python (pyGame and Keras Modeling) to simulate traffic light behavior and improve Traffic Simulations."
                clickable="false"
              />
              <Tile
                title="Speech Recognition and Encryption"
                titleSize="30px"
                text="Using Python and Google Cloud Services, I developed a Speech Recognition program that took input through a microphone or audio file and then which encrypted the message to read back to the user. It has both Encryption and Decryption Capabilties."
                clickable="false"
              />
            </FadeIn>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <FadeIn delay={1500} transitionDuration={500} visible={inViewport}>
          <Grid container spacing={1} style={gridStyle}>
            <Grid item style={tileStyle}>
                <Tile
                  link="https://hub.jhu.edu/2021/08/12/anytown-usa-simulator/"
                  title="AnyTown, USA"
                  text="The Unity Project that was created with Christian Bakhit and I for the purposes of Delineo. With this simulation, we hope to better gardner interest into the workings of Delineo and give policymakers an interactive 'game' for which to gain critical information."
                />
                <Tile
                  link="https://covidweb.isi.jhu.edu/"
                  title="Delineo Modeling Project"
                  text="Delineo is where I currently work as a Researcher and Developer. At Delineo, I help create revolutionary new COVID simulations for law makers to use. Currently, I serve as Team Leader for the Fullstack team and Product Owner of the Unity Project."
                />
            </Grid>
            <Grid item style={tileStyle}>
                <Tile
                  link="https://github.com/ChrisBJHU/DiscordBot"
                  title="Gemini Discord Bot"
                  text="A discord bot implemented in Python that serves as a private service to provide contest problems for students interested in Science Bowl."
                />
                <Tile
                  link="https://github.com/ChrisBJHU/CovidTracker2020"
                  title="Covid Tracker (HopHacks 2020)"
                  text="An Hackathon Project that was built with a team of 4 people in a limited time-frame. This project sought to give users information about COVID and allow them to have a private tracing list. Used WordPress and Python."
                />
            </Grid>
            <Grid item style={tileStyle}>
                <Tile
                  title="Traffic Light Simulator"
                  text="A traffic light simulator that was built with Python (pyGame and Keras Modeling) to simulate traffic light behavior and improve Traffic Simulations."
                  clickable="false"
                />
                <Tile
                  title="Speech Recognition and Encryption"
                  titleSize="30px"
                  text="Using Python and Google Cloud Services, I developed a Speech Recognition program that took input through a microphone or audio file and then which encrypted the message to read back to the user. It has both Encryption and Decryption Capabilties."
                  clickable="false"
                />
            </Grid>
          </Grid>
        </FadeIn>

      );
    }
  };

  return (
    <section ref={projectRef} id="projectContainer">
      <div ref={Projref}>
        <FadeIn delay={1000} transitionDuration={1000} visible={inViewport}>
          <div
            className="twelveJon"
            style={{ paddingBottom: "5%", paddingTop: "5%" }}
          >
            <h1>Projects</h1>
          </div>
          <div style={{ backgroundColor: "#223882" }}>{projects()}</div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
