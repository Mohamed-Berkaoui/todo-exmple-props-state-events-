import React from "react";

function FormTodo() {
  return (
    <form className="add-todo-container">
      <h2>add new todo</h2>
      <div>
        <input type="text" name="task" />
        <button type="submit"> add todo</button>
      </div>
    </form>
  );
}

export default FormTodo;
