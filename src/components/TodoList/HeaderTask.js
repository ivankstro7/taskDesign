import React from 'react';
import iconAdd from '../../images/add.svg';
import './headerTask.css';

function HeaderTask({ total, completed }) {
  return (
    <div className='header-task'>
      <div className='task-title'>
        <h2>To do</h2>
        <p>you have completed {completed} of {total} tasks</p>
      </div>   
      <button className="task-button" onClick={ () => console.log('clic')}><img src={iconAdd} alt="add"/></button>
    </div>    
  );
}

export { HeaderTask };