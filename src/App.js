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
        <form >
          <div className="form-group">
            <label htmlFor="">Enter Todo</label>
            <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          </div>
          <button className="btn btn-primary" type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default App
