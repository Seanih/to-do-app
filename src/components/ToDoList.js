import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ toDosState, setToDos }) => {

    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {toDosState.map(toDo => (
                    <ToDo
                        key={toDo.id}
                        text={toDo.text}
                        toDo={toDo}
                        toDosState={toDosState}
                        setToDos={setToDos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList
