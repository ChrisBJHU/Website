import React, {useRef} from 'react';
import { Carousel } from 'react-responsive-carousel';
import Grid from '@mui/material/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Main from "../../assets/ChristianBakhitMain.jpg";
import Second from "../../assets/ChristianBakhitMain.jpg";
import Third from "../../assets/ChristianBakhitMain.jpg";
import FadeIn from 'react-fade-in';
import Images from '../../pages/Christian/Images';
import arrow from '../../assets/arrowClipart.png';
import { useNav } from '../../customHooks/useNav';
import useIntersection from '../../customHooks/useIntersection';


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


    const listStyleMobile = {
        listStyleImage: {arrow},
        color: 'lightblue',
        overflow: 'hidden',
        whitespace: 'nowrap',
    };


    window.mobileAndTabletCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
      };

    const aboutRef = useNav('About');

    if(!window.mobileAndTabletCheck()) { 
        return (
            <section ref={aboutRef} id='aboutContainer'>
                <Images/>
                <div style = {background} ref = {viewRef}>
                    <FadeIn delay= {500} visible = {inViewport}>
                        <div style = {{opacity: inViewport ? 1 : 0}}>  
                    <div style = {{opacity: inViewport ? 1 : 0}}>  
                        <div style = {{opacity: inViewport ? 1 : 0}}>  
                    <div style = {{opacity: inViewport ? 1 : 0}}>  
                        <div style = {{opacity: inViewport ? 1 : 0}}>  
                            <div class="twelve" style = {{paddingTop: '5%'}}>
                                <h1>About Me</h1>
                            </div>               
                        </div>               
                            </div>               
                        </div>               
                            </div>               
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
                                    <Grid container spacing={10}>
                                        <Grid item xs={5}>
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
                        </div>
                    </FadeIn>
                </div>
            </section>
        );
    } else {
        return (
            <section ref={aboutRef} id='aboutContainer'>
                <Images/>
                <div style = {background} ref = {viewRef}>
                    <FadeIn delay= {500} visible = {inViewport}>
                        <div style = {{opacity: inViewport ? 1 : 0}}>  
                            <div class="twelve" style = {{paddingTop: '5%'}}>
                                <h1>About Me</h1>
                            </div>               
                            <div style = {picStyleMobile}>
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
                                <div style={textBoxStyleMobile}>
                                    <p style = {textStyle}> Hello everyone! My name is Christian Bakhit. I am a student at Johns Hopkins University</p>
                                    <p style = {textStyle}> I have been coding for a few years now, starting off as a tinkerer with Roblox Lua.</p>
                                    <p style = {textStyle}> This was the building block that launched my love of coding! </p>
                                    <Grid container spacing={10}>
                                        <Grid item xs={7}>
                                            <p style = {{color: 'white'}}>Some technologies I have experience with are:</p>
                                            <li style = {listStyleMobile}>Java</li>
                                            <li style = {listStyleMobile}>Python</li>
                                            <li style = {listStyleMobile}>JavaScript</li>
                                            <li style = {listStyleMobile}>C/C++</li>
                                            <li style = {listStyleMobile}>C#</li>
                                            <li style = {listStyleMobile}>x86 - 64 Assembly</li>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <p style = {{color: 'white'}}>My hobbies include:</p>
                                            <li style = {listStyleMobile}>Building Computers</li>
                                            <li style = {listStyleMobile}>Tennis</li>
                                            <li style = {listStyleMobile}>Cooking/Baking</li>
                                            <li style = {listStyleMobile}>Hiking</li>
                                            <li style = {listStyleMobile}>Coding Competitions</li>
                                        </Grid>
                                    </Grid>
                                    <div style = {{height: '100px'}}></div>
                                    <p style = {textStyle}> For the past year, at Delineo,</p>
                                    <p style = {textStyle}>I have been solving the problem of how to simulate the spread of COVID-19 in an environment,</p>
                                    <p style = {textStyle}> in order to help future lawmakers to learn from this pandemic, and plan accordingly for the next!</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        );
    }
};



export default About;