import React from 'react';
import avatar from '../../images/Avatar.png';
import deleteIcon from '../../images/delete.svg';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="list-group-item">
      <span className={`radio-button-unchecked ${props.completed && 'radio-button-checked'}`}></span>
      <div className='item-body'>
        <div className='body-title'>
          <p className={`item-description ${props.completed && 'item-description-checked'}`}>{props.text}</p>
          <div className='item-user'>
            <img src={avatar} alt="user"/>
            <p className={`item-description ${props.completed && 'item-description-checked'}`}>{props.user}</p>
          </div>
        </div>  
        <img src={deleteIcon} alt="delete task"/>      
      </div>
    </li>
  );
}

export { TodoItem };