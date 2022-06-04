import FadeIn from 'react-fade-in';
import React, {useRef} from 'react';
import logo from'../../assets/Jonathan/IconsBlack.png';
import Tile from '../../components/Jonathan/Tile';
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
    display: 'flex',
    flexWrap: 'wrap',
    opacity: inViewport ? 1 : 0,
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor: '#223882',
  };

  const tileStyle = {
    backgroundColor: 'transparent',
    opacity: inViewport ? 1 : 0,
    borderRadius: '0px',
    padding: '8px 8px',
  };


  return (
    <section ref={projectRef} id='projectContainer'>
        <div ref = {Projref} >
        <FadeIn delay= {500} transitionDuration={1000}>
        <div className="twelve" style = {{paddingBottom: '5%', backgroundColor: '#223882', paddingTop: '5%'}}>
            <h1>Projects</h1>
        </div>           
          <Grid container spacing={1} style = {gridStyle}>
            <Grid item style = {tileStyle} >
              <FadeIn delay= {500}  visible = {inViewport}>
              <Tile link = "https://hub.jhu.edu/2021/08/12/anytown-usa-simulator/" title = "AnyTown, USA" text = "The Unity Project that was created with Christian Bakhit and I for the purposes of Delineo. With this simulation, we hope to better gardner interest into the workings of Delineo and give policymakers an interactive 'game' for which to gain critical information."/>
              <Tile link = "https://github.com/ChrisBJHU/DiscordBot" title = "Gemini Discord Bot" text = "A discord bot implemented in Python that serves as a private service to provide contest problems for students interested in Science Bowl."/>

                <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
              </FadeIn>
            </Grid>
            <Grid item style = {tileStyle} >
              <FadeIn delay= {500} transitionDuration={500} visible = {inViewport}>
                <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
                <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
                <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
              </FadeIn>
            </Grid>
            <Grid item style = {tileStyle} >
            <FadeIn delay= {500} transitionDuration={500} visible = {inViewport}>
                <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
                <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
                <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
            </FadeIn>
          </Grid>
        </Grid>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;