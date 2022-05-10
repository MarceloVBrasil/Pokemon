import React from 'react'
import { useMyPokemons } from './Contexts/MyPokemonsProvider'
import {PokemonContainer} from '../Styles/Party--PokemonContainer'
import {PokemonGrid} from '../Styles/Party--PokemonGrid'
import {EmptyBox} from '../Styles/Party--EmptyBox'
import { PokemonTypesContainer } from '../Styles/Party--PokemonTypesContainer.Styled'
import { PokemonType } from '../Styles/Party--PokemonType.Styled'
import { PokemonPartyCloseButton } from '../Styles/Party--PokemonPartyCloseButton.Styled'

export default function Party() {
  const {myPokemonParty, removePokemonFromParty} = useMyPokemons()
  const numberOfEmptyBoxes = 6 - myPokemonParty.length

  return (
    <PokemonGrid>
     {myPokemonParty.map((pokemon, index) => {
      return (<PokemonContainer key={index} image={pokemon.pic}>
        <PokemonPartyCloseButton onClick={() => removePokemonFromParty(pokemon.id)}>&times;</PokemonPartyCloseButton>
                  <h2>{pokemon.name}</h2>
                  <PokemonTypesContainer>
                    {pokemon.type.map((type, index) => (
                      <PokemonType key={index} colorType={type.type.name}>{type.type.name}</PokemonType>
                    ))}
                  </PokemonTypesContainer>
              </PokemonContainer>
      )
     })}

     {numberOfEmptyBoxes === 6 ? <><EmptyBox/><EmptyBox/><EmptyBox/>
     <EmptyBox/><EmptyBox/><EmptyBox/></> : ''}
     
     {numberOfEmptyBoxes === 5 ? <><EmptyBox/><EmptyBox/><EmptyBox/>
     <PokemonContainer/><PokemonContainer/></> : ''}
     
     {numberOfEmptyBoxes === 4 ? <><EmptyBox/><EmptyBox/><EmptyBox/><EmptyBox/></> : ''}
     
     {numberOfEmptyBoxes === 3 ? <><EmptyBox/><EmptyBox/><EmptyBox/></> : ''}
     
     {numberOfEmptyBoxes === 2 ? <><EmptyBox/><EmptyBox/></> : ''}
     
     {numberOfEmptyBoxes === 1 ? <><EmptyBox/></> : ''}
     
    </PokemonGrid>
  )

}
