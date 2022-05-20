import { useNav } from '../../customHooks/useNav';
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
    <section ref={contactRef} id='contactContainer' style = {{height: '100%', marginTop: 0}}>
      <div style = {background}>
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