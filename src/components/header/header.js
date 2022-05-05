import React from 'react';
import logo from '../../images/icon-react.svg';
import iconLevel from '../../images/level.svg';
import iconTime from '../../images/time.svg'
import userPhoto from '../../images/teacher.png'
import './header.css';

function Header() {
  return (
    <header>
      <div className="header-user">
        <img src={logo} alt="logo"/>
        <div className="header-body">
          <small>Course</small>
          <p>Introduction to React.js</p>
        </div>
      </div>
      <div className='header-detail'>
        <div className='detail-item'>
          <div className='item-body'>
            <small>level</small>
            <p>Basic</p>
          </div>
          <img src={iconLevel} alt="icon level"/>
        </div>
        <div className='detail-item'>
          <div className='item-body'>
            <small>Content</small>
            <p>5 hours of content</p>
          </div>
          <img src={iconTime} alt="icon time"/>
        </div>
        <div className='detail-item'>
          <div className='item-body'>
            <small>Instructed by:</small>
            <p>Juan David Castro</p>
          </div>        
          <img src={userPhoto} alt="user photo"/>
        </div>
      </div>
    </header>
  );
}

export { Header };