import React from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import FadeIn from 'react-fade-in';

const Home = () => {
    const buttonSet = {
        backgroundColor: '#222629',
        color: "#66FCF1",
        textTransform: "none",
        backgroundImage: "linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)",
        borderRadius: "8px",
        borderStyle: "none",
        boxSizing: "border-box",
        cursor: "pointer",
        flexShrink: "0",
        fontSize: "20px",
        fontWeight: "500",
        height: "30px",
        padding: "0 1.6rem",
        textAlign: "center",
        textShadow: "rgba(0, 0, 0, 0.25) 0 3px 8px",
        transition: "all .5s",
        userSelect: "none",
        touchAction: "manipulation",
        left: '40%',
      };


      const container = {
        position: 'absolute',
        top: '50%',
        left: '30%',
      };

      const titleStyle = {
          fontSize: '100px',
          fontStyle: 'oblique',
          fontFamily: 'Lucida Handwriting'
      };

      const subTitleStyle = {
        fontSize: '50px',
        fontStyle: 'oblique',
        fontFamily: 'Lucida Handwriting'
      };

      const textStyle = {
        left: '20%',
        position: 'relative',
      };

  return (
    <div style = {container}>
        <FadeIn style = {{delay: '30000', transitionDuration: '3000'}}>
        <p style = {titleStyle}>Hi, my name is</p>
        <p style = {subTitleStyle}>Christian Bakhit</p>
        <p style = {textStyle}> I am a student leader and aspring software developer.</p>
        <p style = {textStyle}> I am a software engineer who speciallizes in data driven problem solving.</p>
        <NavLink to='/about'><Button variant="outlined" style={buttonSet}>Explore</Button></NavLink>
        </FadeIn>
    </div>
  );
};

export default Home;
