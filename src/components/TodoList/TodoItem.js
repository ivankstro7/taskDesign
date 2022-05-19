import React from 'react';
import avatar from '../../images/Avatar.png';
import deleteIcon from '../../images/delete.svg';
import { TodoContext } from '../../todoContext';
import './TodoItem.css';

function TodoItem(props) {
  const {
    setNewTodoUser,
  }=React.useContext(TodoContext);

  return (
    <li className="list-group-item">
      <span className={`radio-button-unchecked ${props.completed && 'radio-button-checked'}`} onClick={props.onComplete}></span>
      <div className='item-body'>
        <div className='body-title'>
          <p className={`item-description ${props.completed && 'item-description-checked'}`}>{props.text}</p>
          <div className='item-user'>
            <img src={avatar} alt="user"/>
            <p className={`item-description ${props.completed && 'item-description-checked'}`}>{setNewTodoUser}</p>
          </div>
        </div>  
        <img src={deleteIcon} alt="delete task" onClick={props.onDelete}/>      
      </div>
    </li>
  );
}

export { TodoItem };