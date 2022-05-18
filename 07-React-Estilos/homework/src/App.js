import React from 'react';
import s from './App.module.css';
import data, {Cairns} from './data.js';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';

function App() {
  return (
    <div className={s.App}>
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
      <div id={s.firstCity}>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
          main={true}
        />
      </div>
      <div>
        <Cards
          cities={data}
        />
      </div>
    </div>
  );
}

export default App;
