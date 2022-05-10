import { useEffect, useState } from 'react'

  export function PokeApi() {
  const url = `https://pokeapi.co/api/v2/pokemon/`
  
  const [pokemon, setPokemon] = useState([])
  const [pokeId, setPokeId] = useState(1)

  const getPokemon = async() => {
    const response = await fetch(url + pokeId);
    const pokemon = await response.json();
    
    setPokemon(
        {id: pokemon.id, name: pokemon.name, pic: pokemon.sprites.front_default, type: pokemon.types}
    )
    
  }


  useEffect(() => {
    getPokemon()
  }, [pokeId])

  return [pokemon, pokeId, setPokeId]
}