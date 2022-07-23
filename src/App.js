import React, { Component } from "react";
import Home from "./pages/Christian/Main";
import Home2 from "./pages/Jonathan/Main";
import HomePage from "./pages/Split";

import "./App.css";

import { Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/homeChristian" element={<Home />} exact />
        <Route path="/homeJonathan" element={<Home2 />} exact />
      </Routes>
    );
  }
}
export default App;
