import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      terms: false
    };
  }
  render() {
    return (
      <div>
        <h1>Hola mundo</h1>
        <input
          type="text"
          value={this.state.name}
          onChange={this.updateName.bind(this)}
        />
        <div>
          <label>
            <input
              type="checkbox"
              checked={this.state.terms}
              onChange={this.updateTerms.bind(this)}
            />
            Acepto los terminos
          </label>
        </div>
        <button onClick={this.sayHi.bind(this)}>Say Hello </button>
      </div>
    );
  }

  updateTerms(event) {
    this.setState({
      terms: event.target.value
    });
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  sayHi() {
    if (this.state.terms) {
      alert("Hola " + this.state.name);
    } else {
      alert("Debes aceptar los terminos");
    }
  }
}

export default App;
