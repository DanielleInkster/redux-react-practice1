import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // state = {
  //   age: 21
  // }

  // onAgeUp = () => {
  //   let age = this.state.age
  //   this.setState({
  //     age: ++age
  //   })
  // }

  // onAgeDown = () => {
  //   let age = this.state.age
  //   this.setState({
  //     age: --age
  //   })
  // }

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

const mapStateToProps = (dispatch) => {
  return {
    age: state.age
  }
}

const mapDispatchToProps=(state)=>{
  return{
    onAgeUp: ()=>dispatch({type:'AGE_UP'}),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN' })
  }
}

export default App;
