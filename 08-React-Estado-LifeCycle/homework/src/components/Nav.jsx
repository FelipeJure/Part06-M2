import React from 'react';
import Logo from '../logoClima.jpg'
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css';

function Nav({onSearch}) {
  return (
    <nav className={s.nav}>
      <div>
        <img src={Logo} alt="imagen de Henry" id={s.logoHenry}/>
        <span >Weather App</span>
      </div>
      <SearchBar onSearch={onSearch}/> 
    </nav>
  );
};

export default Nav;
