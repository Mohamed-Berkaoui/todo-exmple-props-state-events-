import React, { useState } from "react";
import TodoItem from "./TodoItem";

function ListTodos() {
    //where should we create this state? and why
//   const [todos, setTodos] = useState([
//     { id: 1, task: "Review hooks notes", isDone: false },
//     { id: 2, task: "Build a small UI", isDone: true },
//   ]);
  return (
    <div className="todos-list-container">
      {todos.map((element) => (
        <TodoItem todo={element} />
      ))}
    </div>
  );
}

export default ListTodos;
