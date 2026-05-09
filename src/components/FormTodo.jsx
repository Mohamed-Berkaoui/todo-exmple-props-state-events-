import React from "react";

function FormTodo({ addTodo }) {
  
  function handleAddTodo(e) {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      task: e.target.task.value,
      isDone: false,
    };
    addTodo(newTodo);
    e.target.task.value=""
  }
  return (
    <form className="add-todo-container" onSubmit={handleAddTodo}>
      <h2>add new todo</h2>
      <div>
        <input type="text" name="task" />
        <button type="submit"> add todo</button>
      </div>
    </form>
  );
}

export default FormTodo;
