import React from 'react';
import iconSearch from '../../images/Icon__Search.svg'
import './TodoSearch.css';

function TodoSearch() {
  return (
    <div className='search-task'>
      <img src={iconSearch} alt="logo"/>
      <input className="TodoSearch" type="search" placeholder="Search task" />
    </div>    
  );
}

export { TodoSearch };