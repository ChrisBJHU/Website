import Header from "../containers/Header";
import Footer from "../containers/Footer";
const Contact = () => {

    const pageStyle = {
        height: "1000px",
    };
  
  return (
    <div>
      <Header></Header>
      <div style={pageStyle}>
  <p>Hi, my name is</p>
  <p>Christian Bakhit</p>
  <p> I am a student leader, and aspring software developer.</p>
  <p> I am a software engineer who speciallizes in data driven problem solving.</p>
      </div>
      <Footer>  </Footer>
  </div>
  );
};

export default Contact;