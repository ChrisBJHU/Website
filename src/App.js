import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import About from "./containers/About";
import Projects from "./containers/Projects";
import Contact from "./containers/Contact";


const pageStyle = {
  height: "1000px",
};

class App extends Component {
  render() {
    return (
          <div>
              <Router>
                  <Header />
                  <Switch>
                    <div style = {pageStyle}> 
                      <Route exact path="/" component={Home} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/projects" component={Projects} />
                      <Route exact path="/contact" component={Contact} />
                    </div>
                  </Switch>
                  <Footer />
              </Router>
          </div>
    );
  }

} export default App;
