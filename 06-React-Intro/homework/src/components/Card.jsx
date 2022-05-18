import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
  <div key={props.name} className='contenedor'>
    <button onClick={props.onClose} id='closeButton'>X</button>
    <h1>{props.name}</h1>
    <div className='todo'>
      <div className='numbers'>
        <div className='h4'>
          <h4> Max </h4>
          <h5>{props.max}</h5>        
        </div>
        <div className='p'>
          <h4> Min </h4>
          <h5>{props.min}</h5>
        </div>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='imagen del clima' className='imagen'/>
      </div>
  </div>)
};