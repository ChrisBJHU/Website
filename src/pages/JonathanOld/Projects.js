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

  const generalTileStyle = {
    justifyContent: "center",
    alignItems: "center",
  }
  

  const tileStyle = {
    opacity: inViewport ? 1 : 0,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid none #222629",
  };

  const listProjects = [
    {
      title: "Delineo Modeling Project",
      desc: "Delineo is where I currently work as a Researcher and Developer. At Delineo, I help create revolutionary new COVID simulations for law makers to use. Currently, I serve as Team Leader for the Fullstack team and Product Owner of the Unity Project.",
      link: "https://covidweb.isi.jhu.edu/",
      clickable: true,
    },
    {
      title: "AnyTown, USA",
      desc:"The Unity Project that was created with Christian Bakhit and I for the purposes of Delineo. With this simulation, we hope to better gardner interest into the workings of Delineo and give policymakers an interactive 'game' for which to gain critical information.",
      link: "https://hub.jhu.edu/2021/08/12/anytown-usa-simulator/",
      clickable: true,
    },
    {
      title: "Saint Mary & Archangel Micheal of Houston Website",
      desc: "A website for the St. Mary & Archangel Micheal Church, designed and developed on React using Firebase as the backend. This project was made from the ground-up with a two man team and uses several custom functionalites to maintain security and appearance.",
      link: "https://www.saintmaryhouston.org/",
      clickable: true,
    },
    {
      title: "Gemini Discord Bot",
      desc: "A discord bot implemented in Python that serves as a private service to provide contest problems for students interested in Science Bowl.",
      link: "https://github.com/ChrisBJHU/DiscordBot",
      clickable: true,
    },
    {
      title: "Gemini Discord Bot 2.0",
      desc: "A discord bot that provides useful information to the user about watched stocks, website downtimes, and more.",
      link: "/",
      clickable: false,
    },
    {
      title: "Covid Tracker (HopHacks 2020)",
      desc: "A 48 hour hackathon project that aimed to give users information from the JHU dashboard using an API and providing a private tracing list. (Wordpress, Python)",
      link: "https://github.com/ChrisBJHU/CovidTracker2020",
      clickable: true,
    },
    {
      title: "Traffic Light Simulator",
      desc: "A traffic light simulator that was built with Python (pyGame and Keras Modeling) to simulate traffic light behavior and improve Traffic Simulations.",
      link: "/",
      clickable: false,
    },
    {
      title: "HopMC Head Developer",
      desc: "Developed a Minecraft Server deployment deploying a Virtual Machine using Microsoft Azure, and delivered constant updates to respond to data breaches such as the Log4j vulnerability. Served to help organize events for player interaction and enjoyment of the server.",
      link: "/",
      clickable: false,
    },
    {
      title: "Speech Recognition and Encryption",
      desc: "Using Python and Google Cloud Services, I developed a Speech Recognition program that took input through a microphone or audio file and then which encrypted the message to read back to the user. It has both Encryption and Decryption Capabilties.",
      link: "/",
      clickable: false,
    }
  ];

  useEffect(() => {
    const color = "#223882";
    document.body.style.backgroundColor = color;
  }, [inViewport]);

  const FormRow = (props) => {
    let rowVal = props.row * 3;
    let row = listProjects.slice(rowVal, rowVal + 3 );

    return ( 
      <React.Fragment>
        {row.map((project, index) => {
          return (
          <Grid item key={index} style={tileStyle}>
            <Tile
              title={project.title}
              text={project.desc}
              link={project.link}
              clickable={project.clickable}
            />
          </Grid>
          );  
        }
        )}
      </React.Fragment>
    )
  }


  const projects = () => {
    let grid = [];
    for(let i = 0; i < Math.ceil(listProjects.length / 3); i++) {
      grid.push(
        <Grid container key={i} style = {isMobile ? {marginLeft: '0px'}: generalTileStyle}>
          <FormRow row={i} />
      </Grid>
      );
    }
    return (
      <Grid container spacing={1} style = {gridStyle}>
        <FadeIn delay={1500} transitionDuration={500} visible={inViewport}>
          {grid}
        </FadeIn>
    </Grid>
    );
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
