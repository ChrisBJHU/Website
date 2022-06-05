import FadeIn from 'react-fade-in';
import React, {useRef} from 'react';
import logo from'../../assets/Jonathan/IconsBlack.png';
import Tile from '../../components/Jonathan/Tile';
import Grid from '@mui/material/Grid';
import { useNav } from '../../customHooks/useNav';
import  useIntersection from '../../customHooks/useIntersection';
import {useEffect} from 'react';


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
    backgroundColor: '#223882',
  };

  const tileStyle = {
    opacity: inViewport ? 1 : 0,
    padding: '0px 8px',
    borderRadius: '5px',
    border: '1px solid none #222629',
  };

  useEffect(() => {
    const color ='#223882';
    document.body.style.backgroundColor = color;
  }, [inViewport]);

const projects = () => {

    return (
      <Grid container spacing={1}  style = {gridStyle}>
      <Grid item style = {tileStyle} >
        <FadeIn delay= {1500} transitionDuration={500}  visible = {inViewport}>
          <Tile link = "https://hub.jhu.edu/2021/08/12/anytown-usa-simulator/" title = "AnyTown, USA" text = "The Unity Project that was created with Christian Bakhit and I for the purposes of Delineo. With this simulation, we hope to better gardner interest into the workings of Delineo and give policymakers an interactive 'game' for which to gain critical information."/>
          <Tile link = "https://github.com/ChrisBJHU/DiscordBot" title = "Gemini Discord Bot" text = "A discord bot implemented in Python that serves as a private service to provide contest problems for students interested in Science Bowl."/>
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
          <div className="twelveJon" style = {{paddingBottom: '5%', paddingTop: '5%'}}>
              <h1>Projects</h1>
          </div>
          <div style = {{backgroundColor: '#223882'}}>

            {projects()}
          </div> 
        </FadeIn>
      </div>
    </section>
  );
};


export default Projects;