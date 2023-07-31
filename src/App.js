import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import "./App.css";


const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false  },
    { id: 2, text: "Build Todo App", completed: true  },
  ]);

  const addTodo = (text) => {
    if (text.trim() !== "") {
      // execute only when lhs != rhs , like saying text is not empty then run it, checking empty string not running the code , empty != empty '' : condition false so won't run , if text sth it will run

      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
        
      };
      setTodos([...todos, newTodo]);
    }
  };

  
  const removeAllTodos = () => {
    setTodos([]);
  };

   // inside button i was using onChange which was creating problem , not letting the code working properly

  return (
    <div className="App-header">
      <i className="fa-solid fa-bell fa-shake fa-lg"></i>
      <h1>My Todo App</h1>
      <button onClick={removeAllTodos}>Remove all todos</button> 
      <TodoList todos={todos}  removeAllTodos = {removeAllTodos} /> <br />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
