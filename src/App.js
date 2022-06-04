import React, { Component } from "react";
import Home from "./pages/Christian/Main";
import Home2 from "./pages/Jonathan/Main";
import Split from "./pages/Split";
import ResumeC from "./pages/Christian/ResumeViewer";
import ResumeJ from "./pages/Jonathan/ResumeViewer";
import './App.css';

import { Route, Switch, Link } from "react-router-dom";



class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Split />
          </Route>
          <Route path="/homeChristian">
            <Home />
          </Route>
          <Route path="/homeJonathan">
            <Home2 />
          </Route>
          <Route path="/resumeChristian">
            <ResumeC />
          </Route>
          <Route path="/resumeJonathan">
            <ResumeJ />
          </Route>
        </Switch>
      </div>
    );
  }

} export default App;
