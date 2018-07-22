import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
    this.state = {
      tasks: ["Task 1", "Task 2"]
    };
  }

  render() {
    return (
      <div>
        <h1>Hola Mundo</h1>
        <ul>{this.state.tasks.map(task => <li>{task}</li>)}</ul>
        <button onClick={this.addTask.bind(this)}>Agregar Task</button>
        <button onClick={this.updateTask.bind(this)}>Modificar Task</button>
      </div>
    );
  }

  addTask() {
    this.setState({
      tasks: this.state.tasks.concat("Nueva Tarea")
    });
  }

  updateTask() {
    //const index = 1;
    const index = this.state.tasks.findIndex(task => task === "Task 2");

    /* this.setState({
      tasks: this.state.tasks.map(
        (task, i) => (i === index ? "Actualizado" : task)
      )
    });*/
    const tasks = this.state.tasks;
    this.setState({
      tasks: [
        ...tasks.slice(0, index),
        "Actualizado",
        ...tasks.slice(index + 1)
      ]
    });
  }
}

export default App;
