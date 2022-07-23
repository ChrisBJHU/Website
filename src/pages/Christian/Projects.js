import FadeIn from "react-fade-in";
import React, { useRef } from "react";
import Tile from "../../components/Christian/Tile";
import { useNav } from "../../customHooks/useNav";
import useIntersection from "../../customHooks/useIntersection";

const Projects = () => {
  const Projref = useRef();
  const inViewport = useIntersection(Projref, "0px");
  const projectRef = useNav("Projects");

  const listProjects = [
    {
      title: "AnyTown, USA",
      desc: "This Unity Project was a team project between me and Jonathan to implement a 'sims' like simulation of COVID.",
      link: "https://hub.jhu.edu/2021/08/12/anytown-usa-simulator/",
      clickable: true,
    },
    {
      title: "Delineo Modeling Project",
      desc: "The research project I've been fortunate to help research and develop. We aim to create a sandbox for future epidemiological research.",
      link: "https://covidweb.isi.jhu.edu/",
      clickable: true,
    },
    {
      title: "Gemini Discord Bot 2.0",
      desc: "A discord bot that provides useful information to the user about watched stocks, website downtimes, and more.",
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
      title: "Saint Mary & Archangel Micheal of Houston Website",
      desc: "A website for the St. Mary Houston church, designed and developed on React using Firebase as the backend.",
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

  return (
    <section
      ref={projectRef}
      id="projectContainer"
      style={{ backgroundColor: "white" }}
    >
      <div ref={Projref}>
        <FadeIn delay={500} transitionDuration={1000} visible={inViewport}>
          <div className="twelveChris">
            <h1>Projects</h1>
          </div>
          <div className="tileContainer">
            <div
              style={{
                gridTemplateColumns: "repeat(3, 1fr)",
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                width: "1000px",
                left: "50%",
              }}
            >
              {listProjects.map((project, index) => {
                return (
                  <Tile
                    key={index}
                    link={project.link}
                    title={project.title}
                    desc={project.desc}
                    clickable={project.clickable}
                  />
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
