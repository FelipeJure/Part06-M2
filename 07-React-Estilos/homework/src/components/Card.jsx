import React from 'react';
import s from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <div key={props.name} className={props.main? s.nocontenedor : s.contenedor}>
      <button onClick={props.onClose} id={s.closeButton} className={props.main? s.nocloseButton : s.closeButton}>x</button>
      <h1>{props.name}</h1>
      <div className={s.todo}>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='imagen del clima' className={s.imagen}/>
        <div className={s.text} >
          <div>
            <h4> Min </h4>
            <h2>{props.min}</h2>
          </div>
          <div>
            <h4> Max </h4>
            <h2>{props.max}</h2>        
          </div>
        </div>
        </div>
        <p> {props.main}</p>
    </div>)
};