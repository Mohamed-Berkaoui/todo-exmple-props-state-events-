import React, { useState } from "react";
import TodoItem from "./TodoItem";

function ListTodos(props) {
  //{todos:,updateStatus}
  //where should we create this state? and why

  // const todos = [
  //   { id: 1, task: "Review hooks notes", isDone: false },
  //   { id: 2, task: "Build a small UI", isDone: true },
  // ];
  return (
    <div className="todos-list-container">
      {props.todos.map((element) => (
        <TodoItem todo={element} updateStatus={props.updateStatus} />
      ))}
    </div>
  );
}

export default ListTodos;
