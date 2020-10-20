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
      <ToDoList toDosState={toDosState} setToDos={setToDos} />
    </div>
  );
}

export default App;
