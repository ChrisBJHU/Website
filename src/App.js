import Home from "./containers/Home";
import Split from "./containers/Split";
import React, { Component } from "react";
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
              <Route exact path="/home" component={Home} />
          </div>
    );
  }

} export default App;
