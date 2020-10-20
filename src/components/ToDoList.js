import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ toDosState, setToDos, filteredToDos }) => {

    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredToDos.map(toDo => (
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
