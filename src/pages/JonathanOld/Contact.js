import { useNav } from "../../customHooks/useNav";
import ContactForm from "../../components/Jonathan/contactForm.js";
import useIntersection from "../../customHooks/useIntersection";
import { useRef } from "react";
import FadeIn from "react-fade-in";
import { isMobile } from "react-device-detect";

const Contact = () => {
  const thisRef = useRef();
  const inViewport = useIntersection(thisRef, !isMobile ? "-300px" : "0px");
  const contactRef = useNav("Contact");

  const background = {
    backgroundColor: "#223882",
    height: "100%",
    overflow: "hidden",
    paddingBottom: "50px",
    paddingTop: "250px",
  };

  const textStyle = {
    fontSize: "100%",
    color: "white",
    position: "relative",
    textAlign: "center",
  };

  return (
    <section ref={contactRef} id="contactContainer">
      <div ref={thisRef} style={background}>
        <div style={{ opacity: inViewport ? 1 : 0 }}>
          <FadeIn delay={500} transitionDuration={300} visible={inViewport}>
            <ContactForm></ContactForm>
            <p style={textStyle}>
              Want to talk to me directly? Send me a email!
            </p>
            <p style={textStyle}>
              My email is:{" "}
              <span style={{ color: "lightblue", textDecoration: 'underline'  }}>
                jbakhit1@jh.edu
              </span>
            </p>
            <p style={textStyle}>Johns Hopkins Undergraduate</p>
            <p style={textStyle}>
              Computer Science & Applied Mathematics & Statistics Major
            </p>
            <p style={textStyle}>
              Robotics & Computer Integrated Surgery Minor
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
export default Contact;
