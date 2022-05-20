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
import Split from "./containers/Split";


class App extends Component {

  render() {
    return (
          <div>
              <Route exact path="/" component={Split} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
          </div>
    );
  }

} export default App;
