import React, { useState } from "react";
import s from './SearchBar.module.css';

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState ('')
  
  const onChange = (e) => {
    e.preventDefault ();
    setCity (e.target.value);
  }

  return (
    <form className={s.form} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity ('');
    }}>
      <input
        id='input'
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={onChange}
      />
      <input type="submit" value="Agregar" id={s.addbutton}/>
    </form>
  );
}
