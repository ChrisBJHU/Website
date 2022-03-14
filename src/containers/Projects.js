import FadeIn from 'react-fade-in';
import React from 'react';
import logo from'../assets/logo.png';
import Tile from '../components/Tile';
import Grid from '@mui/material/Grid';


const Projects = () => {

  const gridStyle = {

  };

  return (
      <div style = {{}}>
      <Grid container spacing={20} style = {gridStyle}>
        <Grid item xs={3}>
        <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
        <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
        <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" title = "Hello!" text = "My mommy once told me the world was going to roll me. I'm not the sharpest tool in the shed."></Tile>
        </Grid>
      </Grid>
      </div>
  );
};

export default Projects;