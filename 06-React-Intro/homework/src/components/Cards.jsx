import cities from '../data';
import React from 'react';
import Card from './Card';


export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
  <div className='cards'>
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