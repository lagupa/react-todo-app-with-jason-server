import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  state = {
    message: "Hello React App with Json Server!"
  }

  handleOnChange(event) {
    console.log(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("form submited")
  }


  render() {
    return (
      <div className="App container pt-4">
        <h1>{this.state.message}</h1>
        <form onSubmit={(event) =>
          this.handleSubmit(event)
        } >
          <div className="form-group">
            <label htmlFor="">Enter Todo</label>
            <input
              type="text"
              name="todo" id="todo" className="form-control" placeholder="Enter todo"
              onChange={(event) => this.handleOnChange(event)}
            />
          </div>
          <button className="btn btn-primary" type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default App
