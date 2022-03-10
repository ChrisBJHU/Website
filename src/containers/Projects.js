import FadeIn from 'react-fade-in';
import React from 'react';
import logo from'../assets/logo.png';
import Tile from '../components/Tile';
import Grid from '@mui/material/Grid';


const Projects = () => {

  return (
    <div>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0"></Tile>
        <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0"></Tile>
        <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0"></Tile>
      </Grid>
      <Grid item xs={6}>
        <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0"></Tile>
        <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0"></Tile>
        <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0"></Tile>
      </Grid>
      <Grid item xs={6}>
        <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0"></Tile>
        <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0"></Tile>
        <Tile img = {logo} link = "https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0"></Tile>
      </Grid>
     </Grid>
    </div>
  );
};

export default Projects;