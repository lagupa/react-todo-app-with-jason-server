import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    // console.log(props)
    return (
        <div>
            < ul >
                {props.todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        index={index}
                        todo={todo}
                        toggleTodoDone={props.toggleTodoDone}
                        removeTodo={props.removeTodo}
                    />
                ))
                }
            </ul>
        </div>
    )
}

export default TodoList
