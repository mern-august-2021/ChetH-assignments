import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1200")
      .then(response => response.json())
      .then(response => setPokemon(response.results))
      .catch(err => {console.log(err)});
  }, []);

  return (
    <div className="App">
      <p>Pulled {pokemon.length} Pokemons from Pokemon API:</p>
      <ol>
      {pokemon.length > 0 && pokemon.map((poke, index) => {
        return (<li key={index}>{poke.name}</li>)
      })}
      </ol>
    </div>
  );
}

export default App;
