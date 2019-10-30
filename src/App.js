import './App.css';
import React, { Component } from 'react'
import TodoForm from './compoents/TodoForm'

export class App extends Component {
  state = {
    message: "Hello React App with Json Server!",
    newTodo: '',
    todos: [
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
      newTodo: '', // clear the input button, make sure you set the value of the input to this value of newTodo
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

    /* 
    // Method 1 
    // --------------------------
    todos[index] = { ...todos[index] } // make of the todo at the given index, you can also object.assign()
    todos[index].done = event.target.checked // update the done property of the copied todo
    //-------------------------- 
    */

    // Method 2
    // --------------------------
    todos[index] = {
      ...todos[index], // make copy of the array
      // here make changes to the properties that have changed
      done: event.target.checked
    }
    // --------------------------


    console.log(todos)
    this.setState({
      todos
    })
  }
  removeTodo(event, index) {

    console.log(event.target.checked)
    const todos = [...this.state.todos] //make copy the 

    // use the splice method to remove a todo
    todos.splice(index, 1)

    console.log(todos)

    this.setState({
      todos
    })
  }

  allDone(event) {
    console.log("all done executed!...")

    const todos = this.state.todos.map(todo => {
      return {
        ...todo,
        done: true
      }
    })

    this.setState({
      todos
    })

  }


  render() {
    return (
      <div className="App container pt-4">
        <h1>{this.state.message}</h1>
        <TodoForm
          handleSubmit={this.handleSubmit.bind(this)}
          handleOnChange={this.handleOnChange.bind(this)}
          value={this.state.newTodo}
        />


        <div className="pt-4 todo-container">

          < ul >
            {this.state.todos.map((todo, index) => (
              <li key={todo.title}>
                <input
                  type="checkbox"
                  onChange={(event) => this.toggleTodoDone(event, index)}
                  checked={todo.done}
                />
                <span className={todo.done ? "done" : 'not-done'}>{todo.title}</span>
                <span className="delete-todo">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={(event) => this.removeTodo(event, index)}
                  >
                    x
                  </button>
                </span>
              </li>

            ))
            } </ul>
          <button
            onClick={(event) => this.allDone(event)}
            className="btn btn-success"
          >
            all done
          </button>
        </div>
      </div >
    )
  }
}

export default App
