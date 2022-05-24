import React, { useState, useEffect, useRef } from 'react';
import s from './Timer.module.css'



const Timer = () => {

  const [second, setSecond] = useState(0)
  const [run, setRun] = useState (false)
  const [type, setType] = useState ('Contador')

  const toggle = () => setRun (!run)

  function reset() {
    setSecond(0);
    setRun(false);
    if (type === 'Cuenta Regresiva') myRef.current.value = '';
  } 

  function changeType() {
    if(type === 'Contador') setType('Cuenta Regresiva')
    if(type === 'Cuenta Regresiva') setType('Contador')
}

  const myRef = useRef(null)

  function addSecond() {
    if (myRef.current.value >= 0) {
    let ref = myRef.current.value
    setSecond(ref)
    }
}

  useEffect(()=>{
    let intervalo = null;
    if (run && type === 'Contador') {
      intervalo = setInterval(() => {
        setSecond(second => second + 1);
      }, 1000);
    }
    if (run && type === 'Cuenta Regresiva') {
      intervalo = setInterval(() => {
        setSecond(second => second - 1);
      }, 1000);
    }
    if (!run && second !== 0 && type === 'Contador') {
      clearInterval(intervalo);
    }
    if (second === 0 && type === 'Cuenta Regresiva') {
      reset();
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [run, second, type]);


  return (
    <div className={s.app}>
      <div className={s.time}>
        {second}s
      </div>
      <div className={s.row}>
        <button className={s.buttonPrimary} onClick={toggle}>
          {run? 'Pausa': 'Inicio'}
        </button>
        <button className={s.buttonSecondary} onClick={reset}>
          Reset
        </button>
      </div>
      <button className={s.button} onClick={changeType}>
          {type}
      </button>
      {type === 'Cuenta Regresiva' && <input type="number" placeholder="Ingresa Second" value={!run?second:''} ref={myRef} onChange={addSecond} autoComplete="off"/>}
    </div>
  );
};

export default Timer;