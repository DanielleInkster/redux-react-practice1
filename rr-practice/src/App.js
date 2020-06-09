import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    age: 21
  }

  onAgeUp = () => {
    let age = this.state.age
    this.setState({
      age: ++age
    })
  }

  onAgeDown = () => {
    let age = this.state.age
    this.setState({
      age: --age
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App">
          <div>Age: <span>{this.state.age}</span></div>
          <button onClick={this.onAgeUp}>Age Up</button>
          <button onClick={this.onAgeDown}>Age Down</button>
        </div>
      </div>
    );
  }
}

export default App;
