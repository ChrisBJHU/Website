import React, {useRef} from 'react';
import { Carousel } from 'react-responsive-carousel';
import Grid from '@mui/material/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Main from "../../assets/Jonathan/JonathanPicture.png";
import FadeIn from 'react-fade-in';
import Images from '../../pages/Jonathan/Images';
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



    const textBoxStyle = {
        position:'relative',
        backgroundColor: '#344a94',
        opacity: '1',
        padding: '1rem',
        margin: '70px 100px',
        float: 'left',
        borderTopLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        borderStyle: 'dotted solid',
        borderWidth: '5px',
        borderColor: 'lightblue',
        width: '50%',
        height: '100%',
        blur: '20px',
    };

    const textStyle = {
        fontSize: "20px",
        color: 'lightgray',
        fontFamily: 'Arial',
        fontWeight: 'normal',
    };

    const listStyle = {
        listStyleImage: {arrow},
        color: 'lightblue',
        overflow: 'hidden',
        whitespace: 'nowrap',
    };

    const textBoxStyleMobile = {
        position:'relative',
        backgroundColor: '#344a94',
        padding: '1rem',
        borderTopLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        borderStyle: 'dotted solid',
        borderWidth: '5px',
        borderColor: 'lightblue',
        height: '100%',
        display: 'grid',
        top: '100px',
        blur: '20px',

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
                            <div className="twelveJon" style = {{paddingTop: '2%'}}>
                                <h1>About Me</h1> 
                            </div>                                                      
                            </div>               
                            <div style = {isMobile ? picStyleMobile : picStyle}>
                                <div style={boxStyle}> 
                                    <Carousel autoPlay = {false} showThumbs = {false} showStatus = {false} showIndicators = {false} >
                                        <div>
                                            <img src={Main} alt= "" />
                                        </div>
    
                                    </Carousel>
                                </div>
                            </div>
                                <div style={isMobile ? textBoxStyleMobile : textBoxStyle}>
                                    <p style = {textStyle}> Hello! My name is Jonathan Bakhit and I'm currently an Undergraduate at Johns Hopkins University.
                                   I've been programming for over 6 years now, which all started with my fascination with computer games such as Minecraft and Roblox.
                                    </p>

                                    <p style = {textStyle}> I've always been interested in how technology can be used to solve problems. Nowadays, I work in a research lab called Delineo which is focused on the spread of diseases. My goals right now are to expand my knowledge of the field and to learn more about the technology behind it. 
                                    I'm generally focused on Machine Learning and it's applications in our modern world.
                                    </p>

                                    <Grid container style = {{display: 'grid'}} >
                                        <p style = {{color: 'white', textAlign: 'center'}}>Some technologies and languages I have experience with are:</p>
                                        <Grid container columns = {16} spacing = {1} style = {{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                                            <Grid item xs={12} style = {{marginLeft: '10%'}}>
                                                    <li style = {listStyle}>Java</li>
                                                    <li style = {listStyle}>Python</li>
                                                    <li style = {listStyle}>JavaScript</li>
                                                    <li style = {listStyle}>C/C++</li>
                                                    <li style = {listStyle}>C#</li>
                                                </Grid>
                                                <Grid item xs={12} style = {{margin: 'auto'}}>
                                                    <li style = {listStyle}>React</li>
                                                    <li style = {listStyle}>x86 - 64 Assembly</li>
                                                    <li style = {listStyle}>Android Studio/Flutter</li>
                                                    <li style = {listStyle}>HTML/CSS</li>
                                                    <li style = {listStyle}>Unity</li>
                                                </Grid>
                                        </Grid>
                                            <p style = {{color: 'white', textAlign: 'center'}}>Some of my favorite Hobbies/Objects are:</p>
                                            <Grid container columns = {16} spacing = {1} style = {{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                                                <Grid item xs={12} style = {{marginLeft: '10%'}}>
                                                        <li style = {listStyle}>Hiking</li>
                                                        <li style = {listStyle}>Tennis</li>
                                                        <li style = {listStyle}>Editing Artwork and Videos</li>
                                                        <li style = {listStyle}>Computers</li>
                                                        <li style = {listStyle}>Archery</li>
                                                    </Grid>
                                                    <Grid item xs={12} style = {{margin: 'auto'}}>
        
                                                    </Grid>
                                            </Grid>
                                    </Grid>
                                    <div style = {{marginTop: '50px'}}>
                                        <p style = {textStyle}> My time at Hopkins has been very inspiring and very useful for my personal growth. But as my time here is nearing its close, I've prepared myself to enter into a brand new chapter of my life. Just like the beautiful sunset marks the end of the day, I just have to wait for the next sunrise to mark the start of the next. 
                                        I'm excited to be able to continue to learn and grow as a developer. I hope to be able to help others in the future as well. 
                                        </p>
                                    </div>
                                </div>
                    </FadeIn>
                </div>
            </section>
        );
};



export default About;