import React from 'react'

const TodoForm = (props) => {
    // console.log(props)
    return (
        <div>
            <form
                onSubmit={(event) => props.handleSubmit(event)}
            >
                <div className="form-group">
                    <label htmlFor="">Enter Todo</label>
                    <input
                        type="text"
                        name="todo" id="todo" className="form-control" placeholder="Enter todo"
                        value={props.newTodo}
                        onChange={(event) => props.handleOnChange(event)}
                    />
                </div>
                <button className="btn btn-primary" type="submit">Add</button>
            </form>

        </div>
    )
}

export default TodoForm
