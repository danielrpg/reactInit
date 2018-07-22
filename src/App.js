import React, { Component } from "react";
import "./App.css";
import Welcome from "./Welcome";

class App extends Component {
  render() {
    const names = ["Pedro", "Juan", "German"];
    return <div>{names.map(name => <Welcome name={name} />)}</div>;
  }
}

export default App;
