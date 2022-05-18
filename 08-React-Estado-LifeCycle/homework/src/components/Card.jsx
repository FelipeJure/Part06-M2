import React from 'react';
import s from './Card.module.css';

export default function Card ({name, img, onClose, id, temp}) {
  
    return (
      <div key={id} className={s.contenedor} >
      <button onClick={() => onClose(id)} className={s.closeButton}>x</button>
      <h1 className={s.h1}>{name}</h1>
      <div className={s.todo} >
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='imagen del clima' className={s.imagen}/>
        <div className={s.text} >
          <div>
            <h2 className={s.h2}>{temp}°</h2>      
          </div> 
        </div>
        </div>
    </div>)
};
