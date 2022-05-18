import React from 'react';
import s from './SearchBar.module.css';

export default function SearchBar(props) {
  const handlerClick = () => {
    return props.onSearch ('Ciudad del Cairo')
  }
  return (<div>
    <input size={40} type='text' placeholder='City...' ></input>
    <button onClick={handlerClick} id={s.addbutton} >Agregar</button>
  </div>)
};