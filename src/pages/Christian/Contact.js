import { useNav } from '../../customHooks/useNav';
import ContactForm from '../../components/contactForm.js';
import star1 from '../../assets/star1.jpg';
 
const Contact = () => {
	const contactRef = useNav('Contact');

    const background = {
      backgroundColor: '#223882',
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
    <div style = {background}>
      <div>
        <section ref={contactRef} id='contactContainer' style = {{height: '100%', width: '100%'}}>
          <div>
            <ContactForm></ContactForm>
        </div>
        <div>
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
      </section>
    </div>
  </div>
  );
};

export default Contact;