import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  state = {
    message: "Hello React App with Json Server!",
    newTodo: '',
    todos: [
      {
        title: 'I am coding in react',
        done: false
      },
      {
        title: 'Learning CSS for React',
        done: false
      },
      {
        title: 'Recording youtube tutorials',
        done: false
      }
    ]
  }

  handleOnChange(event) {
    // console.log(event.target.value)
    this.setState({
      newTodo: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.newTodo)
    this.setState({
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    })

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
        <div className="pt-4 todo-container">
          {this.state.todos.map(todo => (
            < ul key={todo.title}>
              <li>{todo.title}</li>
            </ul>
          ))
          }
        </div>
      </div >
    )
  }
}

export default App
