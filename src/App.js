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

  toggleTodoDone(event, index) {
    console.log(event.target.checked)

    const todos = [...this.state.todos] //make copy the array
    todos[index] = { ...todos[index] } // make of the todo at the given index

    todos[index].done = event.target.checked // update the done property of the copied todo

    console.log(todos)

    this.setState({
      todos
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

          < ul >
            {this.state.todos.map((todo, index) => (
              <li key={todo.title}>
                <input
                  type="checkbox"
                  onChange={(event) => this.toggleTodoDone(event, index)}
                />
                <span className={todo.done ? "done" : 'not-done'}>{todo.title}</span>

                {/* <span style={{
                  textDecoration: todo.done ? "line-through" : "inherit",
                  paddingLeft: '1rem'
                }}>{todo.title}</span> */}
              </li>

            ))
            } </ul>
        </div>
      </div >
    )
  }
}

export default App
