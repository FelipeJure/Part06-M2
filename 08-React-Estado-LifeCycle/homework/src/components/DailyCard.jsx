import React from 'react';
import s from './DailyCard.module.css';

function DailyCard ({date, img,min,max,id}){
    return (
        <div key={id}>
            <div className={s.trio}>
                <p className={s.date}>{date}</p>
                <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='imagen del clima' className={s.imagen}/>        
                <div className={s.temp}>
                        <p className={s.h3}>{min}°</p>
                        <p className={s.h3}>{max}°</p>
                </div>
            </div>
        </div>
    )
}

export default DailyCard