import React, {useRef} from 'react';
import { Carousel } from 'react-responsive-carousel';
import Grid from '@mui/material/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Main from "../../assets/Christian/ChristianBakhitMain.jpg";
import Second from "../../assets/Christian/ChristianBakhitSecond.png";
import Third from "../../assets/Christian/ChristianBakhitThirdPres.jpg";
import FadeIn from 'react-fade-in';
import Images from '../../pages/Christian/Images';
import arrow from '../../assets/arrowClipart.png';
import { useNav } from '../../customHooks/useNav';
import useIntersection from '../../customHooks/useIntersection';
import {isMobile} from 'react-device-detect';
import {Link} from 'react-router-dom';

const About = () => {

    const viewRef = useRef();
    const inViewport = useIntersection(viewRef, '0px');

    const picStyle = {
        position:'relative',
        width: isMobile ? "25%" : "500px",
        top: '175px',
        float: 'left',
    };

    const background = {
        backgroundColor: 'white',
        height: '100%',
        overflow: 'hidden',
        paddingBottom: '250px',
    }

    const boxStyle = {
        marginLeft: "50px",
        borderStyle: "none",
        boxSizing: "border-box",
        backgroundColor: 'rgba(43, 43, 43, 0.8)',
        padding: "8px 8px",
        borderRadius: "10px",
        position:'relative',
        verticalAlign: 'top',
    };


    const legendStyle = {
    };

    const textBoxStyle = {
        position:'relative',
        backgroundColor: 'transparent',
        padding: '1rem',
        marginRight: '5%',
        float: 'right',
        borderTopLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        borderStyle: 'dotted solid',
        borderWidth: '5px',
        borderColor: 'rgba(43, 43, 43, 0.8)',
        width: '50%',
        height: '100%',
        blur: '20px',
        top: '175px',
    };

    const textStyle = {
        fontSize: "20px",
        color: 'rgba(43, 43, 43, 0.8)',
    };

    const listStyle = {
        listStyleImage: {arrow},
        color: 'rgba(43, 43, 43, 0.8)',
        overflow: 'hidden',
        whitespace: 'nowrap',

    };

    const textBoxStyleMobile = {
        position:'relative',
        backgroundColor: 'white',
        padding: '1rem',
        marginRight: '5%',
        borderTopLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        borderStyle: 'dotted solid',
        borderWidth: '5px',
        borderColor: 'rgba(43, 43, 43, 0.8)',
        height: '100%',
        top: '100px',
        blur: '20px',
        display: 'grid',
    };

    const picStyleMobile = {
        position:'relative',
        width: "95%",
    };

    const buttonHomeStyle = {
        marginBottom: '2%',
        position: 'relative',
        left: '50%',
        height: '3rem',
        width: '12rem',
        textAlign: 'center',
        border: 'black solid 0.2rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        transform: 'translateX(-50%)',
        textTransform: 'uppercase',
        backgroundColor: 'transparent',
        color: 'black',
        cursor: 'pointer',
        marginTop: '3%',
        display: 'inline-block',
        '&:hover': {
            opacity: 0.5,
          }
    };


    const returnHomeButton = () => {
        if(isMobile){
            return (
                <div style = {background}>
                    <Link to="/">
                        <button style = {buttonHomeStyle}> Return to Home </button>
                    </Link>
                </div> 
            );
        }
    };


    const aboutRef = useNav('About');
        return (
            <section ref={aboutRef} id='aboutContainer'>
                <Images/>
                {returnHomeButton()}
                <div style = {background} ref = {viewRef}>
                    <FadeIn delay= {500} visible = {inViewport}>
                    <div style = {{opacity: inViewport ? 1 : 0}}>  
                    <div className="twelveChris" style = {{paddingTop: '2%'}}>
                                <h1>About Me</h1>
                            </div>                                                      
                            </div>               
                            <div style = {isMobile ? picStyleMobile : picStyle}>
                                <div style={boxStyle}>
                                    <Carousel autoPlay = {true} showThumbs = {false} emulateTouch = {true} infiniteLoop = {true} interval = {6000}>
                                        <div>
                                            <img src={Main} alt= "" />
                                            <p className="legend" style={legendStyle}>Me in front of Gilman Hall at Hopkins!</p>
                                        </div>
                                        <div>
                                            <img src={Third} alt= "" />
                                            <p className="legend" style={legendStyle}>One of the opportunities I've had to present Delineo! Design Day 2022</p>
                                        </div>

                                        <div>
                                            <img src={Second} alt= "" />
                                            <p className="legend" style={legendStyle}>Me at Washington Square Park in New York!</p>
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                                <div style={isMobile ? textBoxStyleMobile : textBoxStyle}>
                                    <p style = {textStyle}> Hello everyone! My name is Christian Bakhit. I am a Junior at Johns Hopkins University. My current aspirations have led me to the field of AI and robotics research. I hope that one day I can work on the first AGI!</p>
                                    <p style = {textStyle}> I have been coding for a few years now, starting off as a tinkerer with Roblox Lua to help build games for me and my friends!</p>
                                    <p style = {textStyle}> For the past year I have worked in the Delineo Lab. Here, I have led the team in solving the problem of simulating disease spread.</p>
                                    <p style = {textStyle}>We wish to revolutionize the epidemology field, and help lead policy for the next pandemic!</p>
                                    <Grid container spacing={10}>
                                        <Grid item xs={!isMobile ? 5 : 7 }>
                                            <p style = {{color: '#6BD0FF'}}>Some technologies I have experience with are:</p>
                                            <li style = {listStyle}>Java</li>
                                            <li style = {listStyle}>Python</li>
                                            <li style = {listStyle}>JavaScript</li>
                                            <li style = {listStyle}>C/C++</li>
                                            <li style = {listStyle}>C#</li>
                                            <li style = {listStyle}>x86 - 64 Assembly</li>
                                            <li style = {listStyle}>React</li>
                                            <li style = {listStyle}>Flutter</li>
                                            <li style = {listStyle}>Unity</li>
                                            <li style = {listStyle}>Android Studio</li>
                                        </Grid>
                                        <Grid item xs={!isMobile ? 4 : 6 }>
                                            <p style = {{color: '#6BD0FF'}}>My hobbies include:</p>
                                            <li style = {listStyle}>Coding Competitions</li>
                                            <li style = {listStyle}>Archery</li>
                                            <li style = {listStyle}>Tennis</li>
                                            <li style = {listStyle}>Baking</li>
                                            <li style = {listStyle}>Hiking</li>
                                            <li style = {listStyle}>Guitar</li>
                                            <li style = {listStyle}>Astronomy</li>
                                        </Grid>
                                    </Grid>
                                    <div style = {{height: '25px'}}/>
                                    <p style = {textStyle}>In my time at Hopkins, I have worked with industry leaders, served as a student teacher with the PILOT program, and worked on a variety of projects!</p>
                                </div>
                    </FadeIn>
                </div>
            </section>
        );
};



export default About;