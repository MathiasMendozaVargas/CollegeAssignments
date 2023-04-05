import { useState } from 'react'


function TodoItem({ todoItem, handleChange, deleteTodo }) {
    const [borderTask, setBorderTask] = useState(false)

    return (
        <li style={ borderTask ? {border: '1px solid green'} : {border: 'none'}}>
            <input
                type="checkbox"
                checked={todoItem.completed}
                onChange={() => {
                    borderTask ? setBorderTask(false) : setBorderTask(true)
                    handleChange(todoItem.id)
                }}
            />
            <span style={ todoItem.completed ? { textDecoration: "line-through"}: null}>
                {todoItem.title}
            </span>
            <button onClick={() => deleteTodo(todoItem.id)}>Delete</button>
        </li>
    )
}

export default TodoItem