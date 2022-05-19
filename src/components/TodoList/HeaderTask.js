import React from 'react';
import { TodoContext } from '../../todoContext';
import iconAdd from '../../images/add.svg';
import './headerTask.css';

function HeaderTask(props) {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  const onClickButton = () => {
    props.setOpenModal(true);
  };

  return (
    <div className='header-task'>
      <div className='task-title'>
        <h2>To do</h2>
        <p>you have completed {completedTodos} of {totalTodos} tasks</p>
      </div>   
      <button className="task-button" onClick={onClickButton}><img src={iconAdd} alt="add"/></button>
    </div>    
  );
}

export { HeaderTask };
