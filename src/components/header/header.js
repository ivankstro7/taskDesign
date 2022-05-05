import React from 'react';
import logo from '../../images/icon-react.svg';
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
        <div className='detail-level'>
          <img src={logo} alt="logo"/>
          <div className='level-body'>
            <small>level</small>
            <p>Basic</p>
          </div>
        </div>
        <div className='detail-content'>
          <img src={logo} alt="logo"/>
          <div className='content-body'>
            <small>Content</small>
            <p>5 hours of content</p>
          </div>
        </div>
        <div className='detail-teacher'>
          <img src={logo} alt="logo"/>
          <div className='content-body'>
            <small>Instructed by:</small>
            <p>Juan David Castro</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };