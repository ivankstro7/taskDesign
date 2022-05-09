import React from 'react';
import iconAdd from '../../images/add.svg';
import './TodoCounter.css';

function HeaderTask(props) {
  return (
    <div className='header-task'>
      <div className='task-title'>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </div>   
      <button className="task-button"><img src={iconAdd} alt="add"/></button>
    </div>    
  );
}

export { HeaderTask };