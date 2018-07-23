import React, { Component } from "react";
import { Router, Route, browserHistory } from "react-router";
import "./App.css";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="about" component={About} />
      </Router>
    );
  }
}

export default App;
