import Home from "./pages/Christian/Home";
import Home2 from "./pages/Jonathan/HomeTest";
import Split from "./pages/Split";
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
              <Route exact path="/home2" component={Home2} />
          </div>
    );
  }

} export default App;
