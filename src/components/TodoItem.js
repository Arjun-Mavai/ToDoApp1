 import React from 'react';

const TodoItem = ({ todo   }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} />
      
      <span>{todo.text}</span> 
     
      
      
      <span>{todo.name}</span>  <span> </span>
      <i class="fa-solid fa-trash-can  fa-lg icon-delete"  ></i>
      {'\n'}
    </div>
  );
};

export default TodoItem;
