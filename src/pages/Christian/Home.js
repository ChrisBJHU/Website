import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
import About from './About';
import Projects from './Projects';
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact';
import NavProvider from '../../nav/NavContext';


class Home extends Component {

  state = {
    height: window.innerHeight,
    width: window.innerWidth,
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
        <NavProvider>
        <Header/>
        <FadeIn>
        <About/>
        </FadeIn>
        <FadeIn>
        <Projects/>
        </FadeIn>
        <FadeIn>
        <Contact/>
        </FadeIn>
        <Footer/>
        </NavProvider>
      </div>
    );
  }
}

export default Home;
