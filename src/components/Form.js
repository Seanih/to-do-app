import React from 'react'

const Form = ({ inputText, setInputText, toDosState, setToDos, setStatus }) => {

  const inputTextHandler = e => {
    setInputText(e.target.value)
  };

  const submitToDoHandler = e => {
    e.preventDefault();
    setToDos([
      ...toDosState,
      {
        completed: false,
        id: Math.floor(Math.random() * 100),
        text: inputText,
      }
    ])
    setInputText('')
  }

  const statusHandler = e => setStatus(e.target.value);

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button
        className="todo-button"
        type="submit"
        onClick={submitToDoHandler}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onClick={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incompleted">Incompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form
