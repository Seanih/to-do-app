import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

const App = () => {

  const [inputText, setInputText] = useState('')
  const [toDosState, setToDos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredToDos, setFilteredToDos] = useState([])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredToDos(toDosState.filter(toDo => toDo.completed === true))
        break
      case 'incompleted':
        setFilteredToDos(toDosState.filter(toDo => toDo.completed === false))
        break
      default:
        setFilteredToDos(toDosState)
        break
    }
  }

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalToDos()
  }, [toDosState, status])

  //!Saving to Local Storage
  const saveLocalToDos = () => {
    localStorage.setItem('toDosState', JSON.stringify(toDosState))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('toDosState') === null) {
      localStorage.setItem('toDosState', JSON.stringify([]))
    } else {
      let localToDo = JSON.parse(localStorage.getItem('toDosState'))
      setToDos(localToDo)
      console.log(localToDo);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My To-Do List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        toDosState={toDosState}
        setToDos={setToDos}
        setStatus={setStatus}
      />
      <ToDoList
        toDosState={toDosState}
        setToDos={setToDos}
        filteredToDos={filteredToDos}
      />
    </div>
  );
}

export default App;
