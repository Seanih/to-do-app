import React from 'react'

const ToDo = ({ text, toDo, toDosState, setToDos }) => {

    const deleteHandler = () => {
        setToDos(toDosState.filter(toDoItem => toDoItem.id !== toDo.id))
    }

    const completeHandler = () => {
        setToDos(toDosState.map(toDoItem => {
            if (toDoItem.id === toDo.id) {
                return {
                    ...toDoItem, completed: !toDoItem.completed
                }
            }
            return toDoItem
        }))
    }

    return (
        <div className='todo'>
            <li className={`todo-item ${toDo.completed ? 'completed' : ''}`}>{text}</li>
            <button
                onClick={completeHandler} className='complete-btn'
            >
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default ToDo
