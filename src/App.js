import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BodyOne from "./components/BodyOne";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const color = {
      backgroundColor: '#C4AE78',
      borderBottom:"2px solid #66FCF1",
      display: "flex",
  };

    return (
      <>
      <Header />
      <div style = {color}>
      <BodyOne></BodyOne>
      </div>
      <Footer />
      </>
    );
  }

} export default App;
