import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

const App = () => {

  const [inputText, setInputText] = useState('')
  const [toDos, setToDos] = useState([])

  return (
    <div className="App">
      <header>
        <h1>My To-Do List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        toDos={toDos}
        setToDos={setToDos}
      />
      <ToDoList />
    </div>
  );
}

export default App;
