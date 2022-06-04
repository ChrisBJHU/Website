import React, {useRef} from 'react';
import { Carousel } from 'react-responsive-carousel';
import Grid from '@mui/material/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Main from "../../assets/Christian/ChristianBakhitMain.jpg";
import Second from "../../assets/Christian/ChristianBakhitMain.jpg";
import Third from "../../assets/Christian/ChristianBakhitMain.jpg";
import FadeIn from 'react-fade-in';
import Images from '../../pages/Christian/Images';
import arrow from '../../assets/arrowClipart.png';
import { useNav } from '../../customHooks/useNav';
import useIntersection from '../../customHooks/useIntersection';
import {isMobile} from 'react-device-detect';

const About = () => {

    const viewRef = useRef();
    const inViewport = useIntersection(viewRef, '0px');

    const picStyle = {
        position:'relative',
        width: "25%",
        top: '100px',
    };

    const background = {
        backgroundColor: '#223882',
        height: '100%',
        overflow: 'hidden',
        paddingBottom: '250px',
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
        verticalAlign: 'top',
    };


    const legendStyle = {
        
    };

    const textBoxStyle = {
        position:'relative',
        backgroundColor: 'transparent',
        opacity: '1',
        padding: '1rem',
        margin: '70px 100px',
        float: 'left',
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
    };

    const listStyle = {
        listStyleImage: {arrow},
        color: 'lightblue',
        overflow: 'hidden',
        whitespace: 'nowrap',

    };

    const textBoxStyleMobile = {
        position:'relative',
        backgroundColor: 'transparent',
        padding: '1rem',
        borderTopLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        borderStyle: 'dotted solid',
        borderWidth: '5px',
        borderColor: '#222629',
        height: '100%',
        display: 'grid',
        top: '100px',
    };

    const picStyleMobile = {
        position:'relative',
        width: "95%",
        top: '25px',
    };


    const aboutRef = useNav('About');
        return (
            <section ref={aboutRef} id='aboutContainer'>
                <Images/>
                <div style = {background} ref = {viewRef}>
                    <FadeIn delay= {500} visible = {inViewport}>
                    <div style = {{opacity: inViewport ? 1 : 0}}>  
                            <div className="twelve">
                                <h1>About Me</h1>
                            </div>                                                      
                            </div>               
                            <div style = {isMobile ? picStyleMobile : picStyle}>
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
                                <div style={isMobile ? textBoxStyleMobile : textBoxStyle}>
                                    <p style = {textStyle}> Hello everyone! My name is Christian Bakhit. I am a student at Johns Hopkins University</p>
                                    <p style = {textStyle}> I have been coding for a few years now, starting off as a tinkerer with Roblox Lua.</p>
                                    <p style = {textStyle}> This was the building block that launched my love of coding! </p>
                                    <Grid container spacing={10}>
                                        <Grid item xs={!isMobile ? 5 : 7 }>
                                            <p style = {{color: 'white'}}>Some technologies I have experience with are:</p>
                                            <li style = {listStyle}>Java</li>
                                            <li style = {listStyle}>Python</li>
                                            <li style = {listStyle}>JavaScript</li>
                                            <li style = {listStyle}>C/C++</li>
                                            <li style = {listStyle}>C#</li>
                                            <li style = {listStyle}>x86 - 64 Assembly</li>
                                        </Grid>
                                        <Grid item xs={!isMobile ? 4 : 6 }>
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
                    </FadeIn>
                </div>
            </section>
        );
};



export default About;