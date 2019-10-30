import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  state = {
    message: "Hello React App with Json Server!"
  }
  render() {
    return (
      <div className="App container pt-4">
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

export default App
