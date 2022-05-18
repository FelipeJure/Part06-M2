import React from 'react';
import Card from './Card';
import s from './Cards.module.css';
import OneCard from './oneCard';
import sc from './onlyCard.module.css';

export default function Cards({cities, onClose}) {
  if (cities.length === 1){
    let unico = cities[0]
      return (
      <div className={sc.onlyCard}>
        < OneCard 
          id={unico[0].id}
          key= {unico[0].id}
          max={unico[0].max}
          min={unico[0].min}
          name={unico[0].name}
          img={unico[0].img}
          description={unico[0].description}
          temp={unico[0].temp}
          onClose={onClose}
          humidity={unico[0].humidity}
          sTerm= {unico[0].sTerm}
          city={cities[0][1]}
        />
        </div>)
        }
  else if (cities.length > 1){
    return (
      <div className={s.cards}>
      {
        cities.map (c => { return (< Card 
          id={c[0].id}
          key= {c[0].id}
          max={c[0].max}
          min={c[0].min}
          name={c[0].name}
          img={c[0].img}
          temp={c[0].temp}
          onClose={onClose}
        />)})
      }
    </div>)
  } else {
    return(
      <div>
        <h1>Sin ciudades</h1>
      </div>
    )
  }
}
