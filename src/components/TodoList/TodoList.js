import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    <ul className='list-group-task'>
      {props.children}
    </ul>
  );
}

export { TodoList };