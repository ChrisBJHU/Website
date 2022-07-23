import FadeIn from "react-fade-in";
import React, { useRef } from "react";
import Tile from "../../components/Christian/Tile";
import Grid from "@mui/material/Grid";
import { useNav } from "../../customHooks/useNav";
import useIntersection from "../../customHooks/useIntersection";
import { useEffect } from "react";
import {isMobile} from 'react-device-detect';

const Projects = () => {
  const Projref = useRef();
  const inViewport = useIntersection(Projref, "0px");
  const projectRef = useNav("Projects");

  const listProjects = [
    {
      title: "Delineo Modeling Project",
      desc: "The research project I've been fortunate to help research and develop. We aim to create a sandbox for future epidemiological research.",
      link: "https://covidweb.isi.jhu.edu/",
      clickable: true,
    },
    {
      title: "AnyTown, USA",
      desc: "This Unity Project was a team project to implement a 'sims' like simulation of COVID to support Delineo.",
      link: "https://hub.jhu.edu/2021/08/12/anytown-usa-simulator/",
      clickable: true,
    },
    {
      title: "Saint Mary & Archangel Micheal of Houston Website",
      desc: "A website for the St. Mary & Archangel Micheal Church, designed and developed on React using Firebase as the backend.",
      link: "https://www.saintmaryhouston.org/",
      clickable: true,
    },
    {
      title: "Southern Coptic Project",
      desc: "A Flutter project to allow students to be able to see pdfs of lesson plans on their phones.",
      link: "/",
      clickable: false,
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
      title: "Jarvis Project",
      desc: "A Raspberry Pi project to allow me to be able to control all of the smart home features in my house. I am to use this for automated security and recreation in the future.",
      link: "/",
      clickable: false,
    },
    {
      title: "HopMC President and Head Developer",
      desc: "Created and maintain a Minecraft Server deployment deploying a Virtual Machine using Microsoft Azure, and delivered constant updates to respond to data breaches such as the Log4j vulnerability.",
      link: "/",
      clickable: false,
    },
    
  ];

  const gridStyle = {
    height: "100%",
    width: "100%",
    opacity: inViewport ? 1 : 0,
    justifyContent: "center",
    alignItems: "center",
    transition: "opacity 1s ease-in-out",
    backgroundColor: "white",
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

  
  useEffect(() => {
    const color = "white";
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
              desc={project.desc}
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
            className="twelveChris"
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
