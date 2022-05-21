import { useNav } from '../../customHooks/useNav';
import ContactForm from '../../components/contactForm.js';
 
const Contact = () => {
	const contactRef = useNav('Contact');

    const pageStyle = {
        height: "1000px",
    };

    const background = {
      backgroundColor: '#222629',
      height: '100%',
      overflow: 'hidden',
  }
  
  return (
    <section ref={contactRef} id='contactContainer' style = {{height: '100%', width: '100%'}}>
      <div style = {background}>
        <div>
          <ContactForm></ContactForm>
        </div>
    </div>
  </section>
  );
};

export default Contact;