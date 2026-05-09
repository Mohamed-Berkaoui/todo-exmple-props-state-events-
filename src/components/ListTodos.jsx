import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Filter from "./Filter";

function ListTodos(props) {
  const [filter, setFilter] = useState("all");
  console.log(filter);
  //{todos:,updateStatus}
  //where should we create this state? and why

  // const todos = [
  //   { id: 1, task: "Review hooks notes", isDone: false },
  //   { id: 2, task: "Build a small UI", isDone: true },
  // ];
  return (
    <div className="todos-list-container">
      <Filter setFilter={setFilter} />
      {props.todos
        .filter((ele) =>
          filter == "all"
            ? true
            : filter == "pending"
              ? !ele.isDone
              : ele.isDone,
        )
        .map((element) => (
          <TodoItem
            todo={element}
            updateStatus={props.updateStatus}
            deleteTodo={props.deleteTodo}
          />
        ))}
    </div>
  );
}

export default ListTodos;
