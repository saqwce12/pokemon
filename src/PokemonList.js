function PokemonList() {
  
    const pokemon = ["Bulbasaur", "Squirtle", "Charmander"]
    const listItems = pokemon.map(p => <li>{p}</li>)
    return <ul>{listItems}</ul>
  
}


export default PokemonList;


