import { useState, useEffect } from "react";

const Pokedex = () => {
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0");
        const data = await response.json();
        setPokemonData(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNextPage = async () => {
    if (nextPage) {
      setLoading(true);
      const response = await fetch(nextPage);
      const data = await response.json();
      setPokemonData(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
      setLoading(false);
    }
  };

  const handlePrevPage = async () => {
    if (prevPage) {
      setLoading(true);
      const response = await fetch(prevPage);
      const data = await response.json();
      setPokemonData(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
      setLoading(false);
    }
  };

  const handlePokemonClick = async (pokemon) => {
    
    try {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setSelectedPokemon({ ...pokemon, height: data.height, image: data.sprites.front_default, weight: data.weight, stats: data.stats, abilities: data.abilities });
    } 
    
    catch (error) {
      console.error(" Can't fetching Pokemon details something went wrong try again:", error);
    }
  };

  if (loading) {
    return <p> Loading data </p>;
  }

  return (
    <div>
      <h1>List of pokemon</h1>
      <div
        style={{ display: 'grid', gridTemplateRows: 'repeat(4, 70px)', gridTemplateColumns: 'repeat(5, 100px)', gap: '5px', }}
      >
        {pokemonData.map((pokemon) => (
          <div
            key={pokemon.name}
            style={{
              border: '1px solid black',
              width: '60%',  height: '30%', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              margin: '10px',
              fontSize: '10px',
            }}
            onClick={() => handlePokemonClick(pokemon)}
          >
            {pokemon.name}
            
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrevPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
      {selectedPokemon && (
        <div
            style={{
              border: '2px solid black',
              width: 'auto',  height: 'auto', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              margin: '10px',
              fontSize: '15px',
            }}
           
          >
          <div
          style={{
            border: '1px solid black',
            width: 'auto',  height: 'auto', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            margin: '10px',
            fontSize: '15px',
          }}
          >
          <h2>{selectedPokemon.name}</h2>
          <img src={selectedPokemon.image} alt="pokemon"/>
          </div>
          
          <p> Height: {selectedPokemon.height + " "} </p>
          <p>Weight: {selectedPokemon.weights}</p>
          <p>Stats: {selectedPokemon.stats.map((stat) => <span>{stat.stat.name}: {stat.base_stat}</span>)}</p>
          {console.log(selectedPokemon)}
          <p>Abiltities: {selectedPokemon.abilities.map((ability) => <span>{ability.ability.name}</span>)}</p>
        </div>
      )}
    </div>
  );
};

export default Pokedex;