import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Main from "../assets/ChristianBakhitMain.jpg";
import Second from "../assets/ChristianBakhitSecond.jpg";
import Third from "../assets/ChristianBakhitThird.jpg";
import FadeIn from 'react-fade-in';

const About = () => {

    const caroStyle = {
        showThumbs: false,
    };


    const picStyle = {
        position:'relative',
        top:'100px',
        width: "300px", 
        display: "inline-grid",
    };

    const boxStyle = {
        marginLeft: "50px",
        borderStyle: "none",
        boxSizing: "border-box",
        backgroundColor: '#222629',
        padding: "1rem 1rem",
        borderRadius: "10px",
        display: "inline-block",
    };



    const legendStyle = {
        
    };

    const textBoxStyle = {
        marginLeft: "100px",
        position:'absolute',
        top:'500px',
        left: '300px',
        backgroundColor: '#ffff',
        borderRadius: "10px",
        display: "inline-block",
    };


    const textStyleStart = {
        textIndent: '1ch',
    };

    const textStyle = {
    };


    const listStyle = {
         listStyleImage: "linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)",
         position: 'absolute',
         left: "40%",
         color: 'blue',
         fontColor: 'black',
    };

    const listStyle2 = {
        listStyleImage: "linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)",
        position: 'relative',
        left: "60%",
        color: 'blue',
        fontColor: 'black',
   };
    return (
        
        <div>
            <FadeIn>
                <div style = {picStyle}>
                    <div style={boxStyle}>
                        <Carousel style={caroStyle}>
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
                </FadeIn>
                <div style = {{display: "inline-block",}}>
                    <div style={textBoxStyle}>
                        <p style = {textStyleStart}> Hello everyone! My name is Christian Bakhit. I am a student at Johns Hopkins University</p>
                        <p style = {textStyle}> Currently, I am studying Computer Science, and I am working on various projects.</p>
                        <p style = {textStyle}> Most notabilly now, I am the student leader of Delineo. A project that aims to simulate Covid Spread. <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer"> You can check it out here.</a> </p>
                        <ul style = {listStyle}>
                            <li>Milk</li>
                            <li>Cheese</li> 
                        </ul>
                        <ul style = {listStyle2}>
                            <li>Milk2</li>
                            <li>Cheese</li> 
                        </ul>
                    </div>
                </div>
            </div>
    );
};



export default About;