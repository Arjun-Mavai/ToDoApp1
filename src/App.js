import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build Todo App', completed: true },
  ]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>My Todo App</h1>
      <TodoList todos={todos} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
