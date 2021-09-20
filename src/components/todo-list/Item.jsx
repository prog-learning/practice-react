import React from 'react';

export const Item = ({ todo }) => {
  return (
    <div className='box'>
      <input type='checkbox' />
      <span>{todo.content}</span>
    </div>
  );
};
