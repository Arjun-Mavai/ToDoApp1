 import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeAllTodos }) => {
  return (
    <>
      <div>
        {todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <TodoItem todo={todo} />
          </React.Fragment>
        ))}
        
      </div>
    </>
  );
};

export default TodoList;
