import React, { Component } from 'react'

export class TestForm extends Component {
    state = {
        newTodoItem: "",
        todos: []
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            todos: [
                ...this.state.todos,
                this.state.newTodoItem
            ]
        })
        this.setState({
            newTodoItem: ''
        })



    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            newTodoItem: e.target.value
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.newTodoItem}
                        onChange={this.handleChange}
                    />

                    <input type="submit" value="Submit" />
                </form>

                What you are typing: {this.state.todos.map(todo => (
                    <p>{todo}</p>
                ))}

            </div >
        )
    }
}

export default TestForm
