import React from "react";

function TodoItem({ todo,updateStatus ,deleteTodo}) {
  return (
    <div className="todo-item">
      <p>{todo.task}</p>
      <p>{todo.isDone ? "done" : "pending"}</p>
      <div className="actions">
        <button className="edit-btn" onClick={()=>updateStatus(todo.id)}>update status</button>
        <button className="delete-btn" onClick={()=>deleteTodo(todo.id)}>delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
