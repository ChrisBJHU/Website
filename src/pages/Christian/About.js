import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Grid from '@mui/material/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Main from "../../assets/ChristianBakhitMain.jpg";
import Second from "../../assets/ChristianBakhitMain.jpg";
import Third from "../../assets/ChristianBakhitMain.jpg";
import FadeIn from 'react-fade-in';
import arrow from '../../assets/arrowClipart.png';
import { useNav } from '../../customHooks/useNav';
import Images from './Images';
import starBackground from '../../assets/starrybackground.png';

const About = () => {

    const picStyle = {
        position:'relative',
        width: "25%",
        top: '100px',
        display: 'inline-block',
    };

    const background = {
        backgroundColor: '#223882',
        height: '100%',
        overflow: 'hidden',
    }

    const boxStyle = {
        marginLeft: "50px",
        borderStyle: "none",
        boxSizing: "border-box",
        backgroundColor: '#222629',
        padding: "8px 8px",
        borderRadius: "10px",
        float: 'left',
        position:'relative',
    };


    const legendStyle = {
        
    };

    const textBoxStyle = {
        position:'relative',
        backgroundColor: 'transparent',
        opacity: '1',
        padding: '1rem',
        overflow: 'auto',
        top: '-365px',
        left: '-50px',
        float: 'right',
        borderTopLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        borderStyle: 'dotted solid',
        borderWidth: '5px',
        borderColor: '#222629',
        width: '50%',
        height: '100%',
    };

    const textStyle = {
        fontSize: "20px",
        color: 'lightblue',
        position:'relative',
    };


    const listStyle = {
        listStyleImage: {arrow},
        color: 'lightblue',
    };

    const renderObject = () => {
        return (
            <div style = {background}>
            <FadeIn delay= {500} transitionDuration={500}>
                    <div style = {picStyle}>
                        <div style={boxStyle}>
                            <Carousel autoPlay = {true} showThumbs = {false}>
                                <div>
                                    <img src={Main} alt= "" />
                                    <p className="legend" style={legendStyle}>Legend 1</p>
                                </div>
                                <div>
                                    <img src={Second} alt= "" />
                                    <p className="legend" style={legendStyle}>Legend 2</p>
                                </div>
                                <div>
                                    <img src={Third} alt= "" />
                                    <p className="legend" style={legendStyle}>Legend 3</p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div>
                        <div style={textBoxStyle}>
                            <p style = {textStyle}> Hello everyone! My name is Christian Bakhit. I am a student at Johns Hopkins University</p>
                            <p style = {textStyle}> I have been coding for a few years now, starting off as a tinkerer with Roblox Lua.</p>
                            <p style = {textStyle}> This was the building block that launched my love of coding! </p>
                            <Grid container spacing={12}>
                                <Grid item xs={8}>
                                    <p style = {{color: 'white'}}>Some technologies I have experience with are:</p>
                                    <li style = {listStyle}>Java</li>
                                    <li style = {listStyle}>Python</li>
                                    <li style = {listStyle}>JavaScript</li>
                                    <li style = {listStyle}>C/C++</li>
                                    <li style = {listStyle}>C#</li>
                                    <li style = {listStyle}>x86 - 64 Assembly</li>
                                </Grid>
                                <Grid item xs={4}>
                                    <p style = {{color: 'white'}}>My hobbies include:</p>
                                    <li style = {listStyle}>Building Computers</li>
                                    <li style = {listStyle}>Tennis</li>
                                    <li style = {listStyle}>Cooking/Baking</li>
                                    <li style = {listStyle}>Hiking</li>
                                    <li style = {listStyle}>Coding Competitions</li>
                                </Grid>
                            </Grid>
                            <div style = {{height: '100px'}}></div>
                            <p style = {textStyle}> For the past year, at Delineo,</p>
                            <p style = {textStyle}>I have been solving the problem of how to simulate the spread of COVID-19 in an environment,</p>
                            <p style = {textStyle}> in order to help future lawmakers to learn from this pandemic, and plan accordingly for the next!</p>
                        </div>
                    </div>
                    <Images/>
                    </FadeIn>
                </div>
        );
    }

    const aboutRef = useNav('About');

    return (
        <section ref={aboutRef} id='aboutContainer'  style = {{height: '100%', marginBottom: "0"}} >
            {renderObject()}
        </section>
    );
};



export default About;