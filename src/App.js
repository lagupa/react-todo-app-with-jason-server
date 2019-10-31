import './App.css';
import React, { Component } from 'react'
import TodoForm from './compoents/TodoForm'
import TodoList from './compoents/TodoList'
import TestForm from './compoents/TestForm'
import axios from 'axios'


export class App extends Component {
  state = {
    message: "Hello React App with Json Server!",
    newTodo: '',
    todos: [
      {
        id: '',
        title: '',
        done: false
      }
    ]
  }




  fetchTodos = () => {
    axios.get(`http://localhost:3000/todos`)
      .then(res => {
        // console.log(res)
        const todos = res.data;
        // console.log(todos)
        this.setState({
          ...todos,
          todos
        });
      })
  }


  componentDidMount() {
    this.fetchTodos()
  }




  handleOnChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      newTodo: event.target.value,
      // id: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // Save data on to json db
    axios.post(`http://localhost:3000/todos`, {
      title: this.state.newTodo,
      done: false
    })
      .then(res => {
        // console.log(res.data);
        this.setState({
          newTodo: '',
          todos: [
            ...this.state.todos,
            {
              title: res.data.title,
              done: res.data.done,
              id: res.data.id
            }
          ]
        })
      })
  }

  // toggleTodoDone = (dataId) => {
  //   console.log(dataId)
  // axios.patch(`http://localhost:3000/todos/${dataId}`, {
  //   done: done
  // })
  //   .then(res => {
  //     console.log(res);
  //     // console.log(res.data);
  //   })
  // }

  toggleTodoDone = (id, status) => {
    // // Delete data from backend 
    axios.patch(`http://localhost:3000/todos/${id}`, {
      done: !status
    }).then(res => {
      this.fetchTodos()
    })

  };

  removeTodo = id => {
    // Remove item from UI 
    const todos = this.state.todos.filter(item => item.id !== id);
    this.setState({ todos });

    // Delete data from backend 
    axios.delete(`http://localhost:3000/todos/${id}`)
      .then(res => {
        console.log(res.data);

      })
  };

  // // THIS FUCKEN THING WITH SPLICE DOESN'T WANT TO WORK, IDIOT, IT KILLED MY WHOLE DAY, FUCK!!!
  // removeTodo = (id) => {
  //   //  clear the data from UI
  //   const todos = [...this.state.todos]
  //   todos.splice(id, -1)
  //   this.setState({
  //     todos
  //   })
  //   console.log(id)
  //   // // Delete data from backend 
  //   // axios.delete(`http://localhost:3000/todos/${id}`)
  //   //   .then(res => {
  //   //     // // console.log(res.data);
  //   //     // const todos = [...this.state.todos]
  //   //     // todos.splice(id, 1)
  //   //     // this.setState({
  //   //     //   todos
  //   //     // })
  //   //   })
  // }

  allDone = (event) => {
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
          handleSubmit={this.handleSubmit}
          handleOnChange={this.handleOnChange}
          newTodoValue={this.state.newTodo}
        />
        <div className="pt-4 todo-container">
          <TodoList
            toggleTodoDone={this.toggleTodoDone}
            todos={this.state.todos}
            removeTodo={this.removeTodo}

          />
          <button
            onClick={this.allDone}
            className="btn btn-success"
          >
            all done
          </button>
        </div>
        <TestForm />
      </div >
    )
  }
}

export default App
