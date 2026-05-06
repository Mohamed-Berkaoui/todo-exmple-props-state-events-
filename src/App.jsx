import React from 'react'
import FormTodo from './components/FormTodo'
import ListTodos from './components/ListTodos'

//{id:Number,task:"Review hooks notes",isDone:true}



function App() {
    
  return (
    <div>
        <FormTodo/>
        <ListTodos/>
    </div>
  )
}

export default App