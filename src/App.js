import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

const App = () => {

  const [inputText, setInputText] = useState('')
  const [toDosState, setToDos] = useState([])

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
      />
      <ToDoList toDosState={toDosState} setToDos={setToDos} />
    </div>
  );
}

export default App;
