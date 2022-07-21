import React, { Component } from "react";
import Home from "./pages/Christian/Main";
import Home2 from "./pages/Jonathan/Main";
import Split from "./pages/Split";
import ResumeC from "./pages/Christian/ResumeViewer";
import ResumeJ from "./pages/Jonathan/ResumeViewer";
import "./App.css";

import { Route, HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Split} />
        <Route exact path="/homeChristian" component={Home} />
        <Route exact path="/homeJonathan" component={Home2} />
        <Route exact path="/resumeChristian" component={ResumeC} />
        <Route exact path="/resumeJonathan" component={ResumeJ} />
      </HashRouter>
    );
  }
}
export default App;
