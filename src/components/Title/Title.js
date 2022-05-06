import React from 'react';
import './title.css';
import LogoReact from '../../images/react.svg';

function Title (props) {
  return(
    <div className='container-title'>
      <div className='title-heading'>
        <img src={LogoReact} alt="logo"/>
        <h1>{props.text}</h1>
      </div>
      <p>{props.paragraph}</p>
    </div>
  );
}

export { Title };