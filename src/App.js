import React from "react";
import PokemonList from "./PokemonList";

function App() {
  return (
    <div className="App">
      <h1>Consumo de la API de Pokémon con Axios</h1>
      <PokemonList /> {/* Componente que muestra la lista de Pokémon */}
    </div>
  );
}

export default App;
