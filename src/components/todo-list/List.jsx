import React from 'react';
import { Item } from './Item';

export const List = ({ todos }) => {
  return (
    <div className='box'>
      {todos.map((todo) => (
        <Item todo={todo} />
      ))}
    </div>
  );
};
