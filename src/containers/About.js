import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Grid from '@mui/material/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Main from "../assets/ChristianBakhitMain.jpg";
import Second from "../assets/ChristianBakhitSecond.jpg";
import Third from "../assets/ChristianBakhitThird.jpg";
import FadeIn from 'react-fade-in';
import arrow from '../assets/arrowClipart.png';
const About = () => {

    const picStyle = {
        position:'relative',
        top:'200px',
        width: "400px", 
    };

    const boxStyle = {
        marginLeft: "50px",
        borderStyle: "none",
        boxSizing: "border-box",
        backgroundColor: '#222629',
        padding: "1rem 1rem",
        borderRadius: "10px",
        position:'relative',
    };


    const legendStyle = {
        
    };

    const textBoxStyle = {
        position:'relative',
        marginLeft: "500px",
        marginTop: "-200px",
        marginBottom: "10%",
        //backgroundColor: '#ffff',
        opacity: '1',
        borderRadius: "10px",
    };

    const textStyle = {
        fontSize: "20px",
        color: 'lightblue',
        position:'relative',
    };


    const listStyle = {
        listStyleImage: {arrow} ,
    };

    return (
        
        <div>
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
                                <p>Some technologies I have experience with are:</p>
                                <li style = {listStyle}>Java</li>
                                <li style = {listStyle}>Python</li>
                                <li style = {listStyle}>JavaScript</li>
                                <li style = {listStyle}>C/C++</li>
                                <li style = {listStyle}>C#</li>
                                <li style = {listStyle}>x86 - 64 Assembly</li>
                            </Grid>
                            <Grid item xs={4}>
                                <p>My hobbies include:</p>
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
            </div>
    );
};



export default About;