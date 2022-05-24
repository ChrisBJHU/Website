import FadeIn from 'react-fade-in';
import React from 'react';
import logo from'../../assets/logo.png';
import Tile from '../../components/Tile';
import Grid from '@mui/material/Grid';
import { useNav } from '../../customHooks/useNav';
import OnVisible, { setDefaultProps } from 'react-on-visible';

import star2 from '../../assets/star2.jpg';



const Projects = () => {

  const gridStyle = {
    height: '100%', 
    width: '100%', 
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor: '#223882',

  };

  const tileStyle = {
    backgroundColor: '#222629',
    borderRadius: '10px',
    padding: '8px 8px',

  };

  setDefaultProps({
    bounce: true,
    visibleClassName: 'visible',
    percent: 50
});


  const renderObject = () => {
    console.log('Projects');
    return (
      <div>
      <Grid container spacing={1} style = {gridStyle}>
        <Grid item style = {tileStyle} >
        <FadeIn delay= {500} transitionDuration={500}>
            <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
            <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
            <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
          </FadeIn>
        </Grid>
        <Grid item style = {tileStyle} >
        <FadeIn delay= {500} transitionDuration={500}>
            <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
            <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
            <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
            </FadeIn>
        </Grid>
        <Grid item style = {tileStyle} >
        <FadeIn delay= {500} transitionDuration={500}>
            <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
            <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
            <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
          </FadeIn>
        </Grid>
      </Grid>
    </div>
    );
  };


  const projectRef = useNav('Projects');

  return (
    <section ref={projectRef} id='projectContainer'>
      <OnVisible className="box" percent={0}>
        {renderObject()}
      </OnVisible>
    </section>
  );
};

export default Projects;