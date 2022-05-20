import React, { Component } from "react";
import Home from "./pages/Christian/Main";
import Split from "./pages/Split";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";;



class App extends Component {

  render() {
    return (
          <div>
              <Route exact path="/" component={Split} />
              <Route exact path="/homeChristian" component={Home} />
              <Route exact path="/homeJonathan" component={Home} />
          </div>
    );
  }

} export default App;
