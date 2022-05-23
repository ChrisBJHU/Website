import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
import About from './About';
import Projects from './Projects';
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact';
import starBackground from '../../assets/starBackground.jpg';


class Home extends Component {

  state = {
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundImage: `url(${starBackground})`,
  };

  componentDidMount () {
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
        <div style = {this.state}>
          <Header/>
          <FadeIn delay={300} transitionDuration={700}>
              <About/>
              <Projects/>
              <Contact/>
          </FadeIn>
          <Footer/>
        </div>
    );
  }
}

export default Home;
