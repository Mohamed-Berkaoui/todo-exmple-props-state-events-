import React from "react";

function TodoItem({ todo,updateStatus }) {
  return (
    <div className="todo-item">
      <p>{todo.task}</p>
      <p>{todo.isDone ? "done" : "pending"}</p>
      <div className="actions">
        <button className="edit-btn" onClick={()=>updateStatus(todo.id)}>update status</button>
        <button className="delete-btn">delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
