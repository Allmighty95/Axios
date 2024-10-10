import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonList = () => {
  // Creamos un estado para almacenar la lista de Pokémon
  const [pokemon, setPokemon] = useState([]);
  // Creamos un estado para manejar si los datos están cargando
  const [loading, setLoading] = useState(true);

  // useEffect se ejecuta cuando el componente se carga por primera vez
  useEffect(() => {
    // Hacemos una petición a la API de Pokémon para obtener una lista de Pokémon
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10") // Obtenemos los primeros 10 Pokémon
      .then((response) => {
        setPokemon(response.data.results); // Guardamos los datos en el estado
        setLoading(false); // Cambiamos el estado de loading a false
      })
      .catch((error) => {
        console.error("Error al obtener los Pokémon:", error);
        setLoading(false); // Cambiamos el estado de loading a false si hay un error
      });
  }, []); // El array vacío hace que useEffect se ejecute solo una vez cuando el componente se carga

  // Mostramos un mensaje de carga mientras esperamos los datos
  if (loading) {
    return <p>Cargando Pokémon...</p>;
  }

  return (
    <div>
      <h2>Lista de Pokémon</h2>
      <ul>
        {pokemon.map((poke, index) => (
          <li key={index}>{poke.name}</li> // Mostramos el nombre de cada Pokémon
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
