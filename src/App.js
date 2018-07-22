import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.changeTitle = this.changeTitle.bind(this);
    this.state = {
      title: "Hola Mundo desde Estado"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.changeTitle}>Cambie el titulo</button>
      </div>
    );
  }

  changeTitle() {
    this.setState({
      title: "Nuevo titulo"
    });
  }
}

export default App;
