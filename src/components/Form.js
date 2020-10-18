import React from 'react'

const Form = ({ inputText, setInputText, toDos, setToDos }) => {

  const inputTextHandler = e => {
    console.log(e.target.value)
    setInputText(e.target.value)
  };

  const submitToDoHandler = e => {
    e.preventDefault();
    setToDos([
      ...toDos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 100)
      }
    ])
    setInputText('')
  }

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
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form
