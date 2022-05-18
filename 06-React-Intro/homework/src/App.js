import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
import './components/Card.css'
import './components/SearchBar.css'
import './components/Cards.css'

function App() {
  return (
    <div className="App">
      <div>
        <SearchBar
          onSearch={(ciudad) => {console.log (ciudad); alert(ciudad)}}
        />
      </div>
      <div id='firstCity'>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
    </div>
  );
}

export default App;
