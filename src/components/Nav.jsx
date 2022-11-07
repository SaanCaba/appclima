import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css'
function Nav({onSearch}) {
  return (
      <div className='container-nav'>
      <span className='title-nav'>Weather App ⛅</span>
      <SearchBar onSearch={onSearch}/>
      </div>
  );
};

export default Nav;
