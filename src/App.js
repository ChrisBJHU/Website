import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const pageStyle = {
  height: "1000px",
  backgroundColor: "gray",
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
