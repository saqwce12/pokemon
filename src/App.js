import "./App.css";
import Pokedex from "./routes/Pokedex";
import Pokemon from "../Pokemon";
import { useState, useEffect } from "react";
import GetPokemonDetail from "../GetPokemonDetail";
import { useMemo } from "react";


function App() {
  const [pokemonList, setPokemonList] = useState(null);
  const [page, setPage] = useState(0);
 /*  const pokemonItems = pokemonList.map(p => <li>{p}</li>); */

  useEffect(() => {
    fetchPokemon(page);
  }, [page]);

  function fetchPokemon(number) {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        if (!response.ok) throw new Error("Response was not OK!");
        return response.json();
      })
      .then((result) => {
        setPokemonList(result.results);
      })
      .catch((error) => console.log(error.message));
      

      
  }
  const pokemon = ["Bulbasaur", "Squirtle", "Charmander"]
      const listItems = pokemon.map(p => <li>{p}</li>)
  return <>{console.log(pokemonList)};
    <ul>{listItems}</ul>
 </>



}
export default App;
