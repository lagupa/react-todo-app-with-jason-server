import React from 'react'

const TodoItem = (props) => {
    return (
        <div>
            <li key={props.todo.title}>
                <input
                    type="checkbox"
                    onChange={(event) => props.toggleTodoDone(event, props.index)}
                    checked={props.todo.done}
                />
                <span className={props.todo.done ? "done" : 'not-done'}>{props.todo.title}</span>
                <span className="delete-todo">
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={(event) => props.removeTodo(event, props.index)}
                    >
                        x
        </button>
                </span>
            </li>

        </div>
    )
}

export default TodoItem
