import { useState, useEffect } from 'react'

function Pokemon({ name }) {
  //const [pokemon, setPokemon] = useState(null)

  useEffect(() => fetchDetailedPokemonInformation(name), []);

  function fetchDetailedPokemonInformation(name) {
    //fetch ala ../pokemon/{name}

  }

  return (
    <div>
       <h1 style={{color: "red"}}><u>{name}</u></h1>

    </div>
  );
}

function Hej () {

}

function Two() {
  
}

export default Pokemon;

export { Hej, Two }
