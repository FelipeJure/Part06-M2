import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  const handlerClick = () => {
    return props.onSearch ('Ciudad del Cairo')
  }
  return (<div>
    <input type='text' size={40} placeholder='City...' ></input>
    <button onClick={handlerClick} id='addbutton' >Agregar</button>
  </div>)
};