import React from 'react';
import cities from '../data';
import Card from './Card';
import s from './Cards.module.css'

export default function Cards(props) {
  
  return (
    <div className={s.cards}>
      {
        cities.map (c => { return (<Card 
          key= {c.name}
          max={c.main.temp_max}
          min={c.main.temp_min}
          name={c.name}
          img={c.weather[0].icon}
          onClose={() => alert(c.name)}
        />)})
      }
    </div>)
};