import React, { useState } from "react";
import FormTodo from "./components/FormTodo";
import ListTodos from "./components/ListTodos";


function App() {

  const [todos, setTodos] = useState([
    { id: 1, task: "Review hooks notes", isDone: false },
    { id: 2, task: "Build a small UI", isDone: true },
  ]);

  function addTodo(todo){
    setTodos([...todos,todo])
  }

  function updateStatus(id){
    setTodos(todos.map(ele=>ele.id==id?{...ele,isDone:!ele.isDone}:ele))
  }

  return (
    <div>
      <FormTodo addTodo={addTodo}/>
        <ListTodos todos={ todos} updateStatus={updateStatus}/>
    </div>
  );
}

export default App;
