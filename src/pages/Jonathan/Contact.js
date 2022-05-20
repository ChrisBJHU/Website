import { useNav } from '../../customHooks/useNav';
const Contact = () => {
	const contactRef = useNav('Contact');

    const pageStyle = {
        height: "1000px",
    };
  
  return (
    <section ref={contactRef} id='contactContainer'>
    <div>
      <div style={pageStyle}>
  <p>Hi, my name is</p>
  <p>Christian Bakhit</p>
  <p> I am a student leader, and aspring software developer.</p>
  <p> I am a software engineer who speciallizes in data driven problem solving.</p>
      </div>
  </div>
  </section>
  );
};

export default Contact;