import React from "react";
import { useParams } from "react-router-dom";

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

export default function Ciudad(onFilter) {
    const {ciudadId} = useParams ()
 

    const [city, setCity] = React.useState (undefined)

    React.useEffect (() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${ciudadId}&appid=${apiKey}`)
    .then(r => r.json())
    .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCity(ciudad);
        } else {
            setCity (null) 
        }
    });
}, [ciudadId])
    if (city===undefined){
        return <h1>Cargando...</h1>
    } else if (city===null){
        return <h1>Ciudad no encontrada</h1>
    } else {
    return (
        <div className="ciudad">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}
}