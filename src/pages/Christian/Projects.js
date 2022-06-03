import FadeIn from 'react-fade-in';
import React, {useRef} from 'react';
import logo from'../../assets/logo.png';
import Tile from '../../components/Tile';
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
    backgroundColor: '#222629',
    opacity: inViewport ? 1 : 0,
    borderRadius: '0px',
    padding: '8px 8px',
  };


  return (
    <section ref={projectRef} id='projectContainer'>
        <div ref = {Projref} >
        <FadeIn delay= {500} transitionDuration={1000}>
        <div class="twelve" style = {{paddingBottom: '5%', backgroundColor: '#223882', paddingTop: '5%'}}>
            <h1>Projects</h1>
        </div>           
          <Grid container spacing={1} style = {gridStyle}>
            <Grid item style = {tileStyle} >
              <FadeIn delay= {500}  visible = {inViewport}>
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