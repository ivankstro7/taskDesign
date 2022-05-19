import React from 'react';
import { TodoContext } from '../../todoContext';
import iconAdd from '../../images/add.svg';
import './headerTask.css';

function HeaderTask() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <div className='header-task'>
      <div className='task-title'>
        <h2>To do</h2>
        <p>you have completed {completedTodos} of {totalTodos} tasks</p>
      </div>   
      <button className="task-button" onClick={ () => console.log('clic')}><img src={iconAdd} alt="add"/></button>
    </div>    
  );
}

export { HeaderTask };