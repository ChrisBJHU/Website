import { useNav } from '../../customHooks/useNav';
import ContactForm from '../../components/Christian/contactForm.js';
import  useIntersection from '../../customHooks/useIntersection';
import {useRef} from 'react';
import FadeIn from 'react-fade-in';

const Contact = () => {
  
  const thisRef = useRef();
  const inViewport = useIntersection(thisRef, '-10px');
	const contactRef = useNav('Contact');

    const background = {
      backgroundColor: 'white',
      height: '100%',
      overflow: 'hidden',
      paddingBottom: '50px',
      paddingTop: '250px',
  }

  const textStyle = {
      fontSize: "100%",
      color: 'lightblue',
      position:'relative',
      textAlign: 'center',
  }

  return (
    <section ref={contactRef} id='contactContainer'>
      <div ref = {thisRef} style = {background}>
          <div style = {{opacity: inViewport ? 1 : 0}}>
          <FadeIn delay= {500} transitionDuration = {300} visible = {inViewport}>
            <div style = {{      border: '10px inset green',
      borderWidth: '5px',}}>
            <ContactForm></ContactForm>
            </div>
            <p style={textStyle}>
              Want to talk to me directly? Send me a email!
            </p>
            <p style={textStyle}>
              My email is: <a href="mailto: cbakhit1@jh.edu" type="email" style={{ color: "lightblue" }}>
                cbakhit1@jh.edu
              </a>
            </p>
            <p style={textStyle}>
              Johns Hopkins Undergraduate
            </p>
            <p style={textStyle}>
              Computer Science & Applied Mathematics & Statistics Major
            </p>
            </FadeIn>
          </div>      
          </div>
    </section>
  );
}; export default Contact;