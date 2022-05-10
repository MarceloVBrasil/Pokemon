import React, { useContext } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'

const MyPokemonsContext = React.createContext()

export function useMyPokemons()
{
    return useContext(MyPokemonsContext)
}

export  function MyPokemonsProvider({children}) {
    const [myPokemonParty, setMyPokemonParty] = useLocalStorage('myPokemonParty', [])

    function addPokemonToParty(pokemon)
    {
        setMyPokemonParty(prevPokemons => {
            if(prevPokemons.length === 6) return prevPokemons
            if(prevPokemons.find(p => p.id === pokemon.id)) return prevPokemons

            return [...prevPokemons, pokemon]
        })
    }

    function removePokemonFromParty(id)
    {
        setMyPokemonParty(prevPokemons => {
            return prevPokemons.filter(p => p.id !== id)
        })
    }

    const myPokemonsContextValue =
    {
        myPokemonParty,
        setMyPokemonParty,
        addPokemonToParty,
        removePokemonFromParty
    }

    return (
        <MyPokemonsContext.Provider value={myPokemonsContextValue} >
            {children}
        </MyPokemonsContext.Provider>
    )
}
