import React from 'react';
import s from './oneCard.module.css';
import Humedad from '../humedad.png';
import st from '../sterm.png';
import DailyCard from './DailyCard'

export default function OneCard ({min, max, name, img ,description , onClose, id, temp, humidity, sTerm,city}) {

    var diaSemana = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
        'Mañana'
    ]
    var dia = new Date ().getDay()
    var x = 1
    return (
    <div key={id} className={s.contenedor}>
      <button onClick={() => onClose(id)} className={s.closeButton}>x</button>
      <div className={s.todo}>
      <p className={s.h1}>{name}</p>
      <div className={s.info}>        
        <div className={s.text} >
            <p className={s.h2}>{temp}°</p>
        </div>
        <div className={s.trio}>
            <div >
                <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='imagen del clima' className={s.imagen}/>        
                <p className={s.time}> {description} </p>
            </div>
            <div>
                <h4 className={s.h4}>Min</h4>
                    <h3 className={s.h3}>{min}°</h3>
                </div>
            <div>
                <h4 className={s.h4}>Max</h4>
                <h3 className={s.h3}>{max}°</h3>
            </div>
            </div>
        <div/>
        </div>
        <div className={s.elementos}>
            <div>
                <img src={Humedad} alt='Humedad' className={s.humedad} />
                <p className={s.h4}>{humidity}%</p>
            </div>
            <div>
                <img src={st} alt='Sens term' className={s.st}/>
                <p className={s.h4}>{sTerm}°</p>
            </div>
        </div>
        <div className={s.cards}>
    {city.map (c => {return (< DailyCard 
          key= {c.id}
          min={c.min}
          date= {diaSemana[x === 1? 7: dia+x > 6? dia-(7-x) : dia+x]}
          img={c.img}
          max={c.max}
          x= {x = x+1} 
        />)
        })
    }

    </div>
    </div>
    </div>)
};