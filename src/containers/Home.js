import React, {Component} from 'react';
import About from './About';
import Projects from './Projects';
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact';

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
        <Projects>  </Projects>
      </div>
    );
  }
}

export default Home;
