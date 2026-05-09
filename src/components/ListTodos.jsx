import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Filter from "./Filter";

function ListTodos(props) {
  const [filter, setFilter] = useState("all");
  console.log(filter);
  const filterdTodos = props.todos.filter((ele) =>
    filter == "all" ? true : filter == "pending" ? !ele.isDone : ele.isDone,
  );
  return (
    <div className="todos-list-container">
      <Filter setFilter={setFilter} />
      {filterdTodos.length == 0 ? (
        <h2>no todos</h2>
      ) : (
        filterdTodos.map((element) => (
          <TodoItem
            todo={element}
            updateStatus={props.updateStatus}
            deleteTodo={props.deleteTodo}
          />
        ))
      )}
    </div>
  );
}

export default ListTodos;
