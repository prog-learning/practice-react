import React, { useState } from 'react';
import { List } from '../src/components/todo-list/List';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { content: 'learn React', completed: true },
    { content: 'build a React app', completed: false },
    { content: 'インコの世話', completed: false },
  ]);

  return (
    <div className='box'>
      <h1>Todo List</h1>
      <div className='box'>
        <input type='text' />
        <button>送信</button>
      </div>
      <List todos={todos} />
    </div>
  );
};

export default TodoList;
