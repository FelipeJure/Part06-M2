import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import apikey from './apikey'


export default function App() {
  const [cities, setCities] = useState ([]);

  function onClose(id) {
    setCities(cities => cities.filter(c => c[0].id !== id));
  }
  
  function onSearch (ciudad, repeat) {
    if (ciudad){
    fetch (`https://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&appid=${apikey}`)
    .then(r => r.json())
    .then((search) => {
      const searcher = {
        lat: search[0].lat,
        lon: search[0].lon,
      }
      if (search[0].country === 'AR'){
        if (search[0].local_names) {searcher.name = search[0].local_names.es
      } else {
        searcher.name = search[0].name
      } }else {
        searcher.name = search[0].name}
      fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${searcher.lat}&lon=${searcher.lon}&exclude=hourly,minutely,alerts&lang=sp&appid=${apikey}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.current){
        const city = [{
          min: Math.round(recurso.daily[0].temp.min),
          max: Math.round(recurso.daily[0].temp.max),
          img: recurso.current.weather[0].icon,
          description: recurso.current.weather[0].description,
          id: searcher.lat+searcher.lon,
          temp: Math.round (recurso.current.temp),
          sTerm: Math.round (recurso.current.feels_like),
          name: searcher.name,
          humidity: recurso.current.humidity},
        [{
          min: Math.round(recurso.daily[1].temp.min),
          max: Math.round(recurso.daily[1].temp.max),
          img: recurso.daily[1].weather[0].icon,
        },
        {
          min: Math.round(recurso.daily[2].temp.min),
          max: Math.round(recurso.daily[2].temp.max),
          img: recurso.daily[2].weather[0].icon,
        },
        {
          min: Math.round(recurso.daily[3].temp.min),
          max: Math.round(recurso.daily[3].temp.max),
          img: recurso.daily[3].weather[0].icon,
        },
        {
          min: Math.round(recurso.daily[4].temp.min),
          max: Math.round(recurso.daily[4].temp.max),
          img: recurso.daily[4].weather[0].icon,
        },
        {
          min: Math.round(recurso.daily[5].temp.min),
          max: Math.round(recurso.daily[5].temp.max),
          img: recurso.daily[5].weather[0].icon,
        }]
        ];
        cities.forEach (c => {if (c[0].id === city[0].id) return (repeat = true, alert ('Ciudad ya seleccionada'))})
        if (!repeat) setCities(oldCities => [...oldCities, city]);
      } else {
        alert("Ciudad no encontrada");
      }
    })
  })
  }
}
  
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}
