import FadeIn from 'react-fade-in';
import React, {useRef} from 'react';
import Tile from '../../components/Christian/Tile';
import Grid from '@mui/material/Grid';
import { useNav } from '../../customHooks/useNav';
import  useIntersection from '../../customHooks/useIntersection';

const Projects = () => {

  const Projref = useRef();
  const inViewport = useIntersection(Projref, '0px');
  const projectRef = useNav('Projects');

  const gridStyle = {
    height: '100%', 
    width: '100%', 
    opacity: inViewport ? 1 : 0,
    justifyContent:'center', 
    alignItems:'center',
    transition: 'opacity 1s ease-in-out',

  };

  const tileStyle = {
    opacity: inViewport ? 1 : 0,
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid none #222629',
  };


  const projects = () => {
    return (
      <Grid container spacing={1}  style = {gridStyle}>
      <Grid item style = {tileStyle} >
        <FadeIn delay= {1500} transitionDuration={500}  visible = {inViewport}>
          <Tile link = "https://hub.jhu.edu/2021/08/12/anytown-usa-simulator/" title = "AnyTown, USA" text = "This Unity Project was a team project between me and Jonathan to implement a 'sims' like simulation of COVID."/>
          <Tile link = "https://covidweb.isi.jhu.edu/" title = "Delineo Modeling Project" text = "The research project I've been fortunate to help research and develop. We aim to create a sandbox for future epidemiological research."/>
        </FadeIn>
      </Grid>
      <Grid item style = {tileStyle} >
        <FadeIn delay= {1500} transitionDuration={500} visible = {inViewport}>
        <Tile link = "https://github.com/ChrisBJHU/DiscordBot" title = "Gemini Discord Bot" text = "A discord bot implemented in Python that serves as a private service to provide contest problems for students interested in Science Bowl."/>
        <Tile title = "Southern Coptic Project" text = "A Flutter project to allow students to be able to see pdfs of lesson plans on their phones." clickable = 'false'/>
        </FadeIn>
      </Grid>
      <Grid item style = {tileStyle} >
      <FadeIn delay= {1500} transitionDuration={500} visible = {inViewport}>
      <Tile link = "https://github.com/ChrisBJHU/CovidTracker2020" title = "Covid Tracker (HopHacks 2020)" text = "A 48 hour hackathon project that aimed to give users information from the JHU dashboard using an API and providing a private tracing list. (Wordpress, Python)"/>
      <Tile title = "Jarvis Project" text = "A Raspberry Pi project to allow me to be able to control all of the smart home features in my house. I am to use this for automated security and recreation in the future." clickable = 'false'/>
      </FadeIn>
    </Grid>
  </Grid>
    );
  }

  return (
    <section ref={projectRef} id='projectContainer'>
        <div ref = {Projref} >
        <FadeIn delay= {1000} transitionDuration={1000} visible = {inViewport}>
          <div className="twelveChris" style = {{paddingBottom: '5%', paddingTop: '5%'}}>
              <h1>Projects</h1>
          </div>           
          {projects()}
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;