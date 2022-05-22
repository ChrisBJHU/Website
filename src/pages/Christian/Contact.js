import { useNav } from '../../customHooks/useNav';
import ContactForm from '../../components/contactForm.js';
 
const Contact = () => {
	const contactRef = useNav('Contact');

    const background = {
      backgroundColor: '#222629',
      height: '100%',
      overflow: 'hidden',
      paddingBottom: '25px',
      paddingTop: '25px',
  }

  const textStyle = {
      fontSize: "20px",
      color: 'lightblue',
      position:'relative',
      textAlign: 'center',
  }
  
  return (
    <div>
      <section ref={contactRef} id='contactContainer' style = {{height: '100%', width: '100%'}}>
        <div style = {background}>
          <ContactForm></ContactForm>
      </div>
    </section>
    <div style = {background}>
      <p style = {textStyle}>
        Want to talk to me directly? Send me a email! 
      </p>
      <p style = {textStyle}>
        My email is: <a href="mailto: chrisbakhit@gmail.com" type="email" style = {{color: "lightblue"}}>
        chrisbakhit@gmail.com
        </a>
        </p>
        <p style = {textStyle}>
        Johns Hopkins Undergraduate
        </p>
        <p style = {textStyle}>
        Computer Science & Applied Mathematics & Statistics Major
      </p>
    </div>
  </div>
  );
};

export default Contact;