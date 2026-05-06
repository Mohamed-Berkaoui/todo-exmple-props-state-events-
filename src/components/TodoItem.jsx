import React from "react";

function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <p>{todo.task}</p>
      <div className="actions">
        <button className="edit-btn">update status</button>
        <button className="delete-btn">delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
