import React from 'react';
import iconSearch from '../../images/Icon__Search.svg'
import { TodoContext } from '../../todoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <div className='container-search'>
      <div className='search-task'>
        <img src={iconSearch} alt="logo"/>
        <input className="TodoSearch" type="search" placeholder="Search task" value={searchValue} onChange={onSearchValueChange}/>
      </div> 
      <p>search result for:<span>{searchValue}</span></p>
    </div>      
  );
}

export { TodoSearch };