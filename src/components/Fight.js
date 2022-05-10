import React, { useState } from 'react'
import { useMyPokemons } from './Contexts/MyPokemonsProvider'
import { ScreenContainer } from '../Styles/Fight--ScreenContainer.Styled'
import { PlayerContainer } from '../Styles/Fight--PlayerContainer.Styled'
import { PlayerGrid } from '../Styles/Fight--PlayerGrid.Styled'
import { OponentGrid } from '../Styles/Fight--OponentGrid.Styled'
import { Trainer } from '../Styles/Fight--Trainer.Styled'
import { Pokemon } from '../Styles/Fight--Pokemon.Styled'
import { PokemonPlaceholder } from '../Styles/Fight--PokemonPlaceholder.Styled'
import { TrainerName } from '../Styles/Fight--TrainerName.Styled'
import opponents from '../data/opponents'
import { Opponent } from '../Styles/Fight--Opponent.Styled'
import { SelectArrow } from '../Styles/Fight--SelectArrow.Styled'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function Fight() {
    const {myPokemonParty} = useMyPokemons()
    const numberOfEmptyBoxes = 6 - myPokemonParty.length    
    const [gymLeaderId, setGymLeaderId] = useState(1)
    const selectedGymLeader = opponents.find(opponent => opponent.id === gymLeaderId)
    const numberOfOpponentEmptyBoxes = 6 - selectedGymLeader.pokemons.length

  return (
    <ScreenContainer>
      <PlayerContainer player={true}>
        <PlayerGrid>
            <Trainer>
                <TrainerName>TRAINER</TrainerName>
            </Trainer>
            {myPokemonParty.map((pokemon, index) => (
                <Pokemon pokemon={pokemon.pic} key={index}/>
            ))}
            {numberOfEmptyBoxes === 6 ? <><PokemonPlaceholder/><PokemonPlaceholder/><PokemonPlaceholder/>
            <PokemonPlaceholder/><PokemonPlaceholder/><PokemonPlaceholder/></> : ''}
            
            {numberOfEmptyBoxes === 5 ? <><PokemonPlaceholder/><PokemonPlaceholder/><PokemonPlaceholder/>
            <PokemonPlaceholder/><PokemonPlaceholder/></> : ''}
            
            {numberOfEmptyBoxes === 4 ? <><PokemonPlaceholder/><PokemonPlaceholder/><PokemonPlaceholder/><PokemonPlaceholder/></> : ''}
            
            {numberOfEmptyBoxes === 3 ? <><PokemonPlaceholder/><PokemonPlaceholder/><PokemonPlaceholder/></> : ''}
            
            {numberOfEmptyBoxes === 2 ? <><PokemonPlaceholder/><PokemonPlaceholder/></> : ''}
            
            {numberOfEmptyBoxes === 1 ? <><PokemonPlaceholder/></> : ''}
        </PlayerGrid>
      </PlayerContainer>
      
      <PlayerContainer player={false}>
        <OponentGrid> 
          <Opponent pic={selectedGymLeader.pic}>
                <TrainerName>{selectedGymLeader.name}</TrainerName>
            </Opponent>

            {selectedGymLeader.pokemons.map(pokemon => (
                <Pokemon key={pokemon.id} pokemon={pokemon.pic}/>
            ))}
            
            {numberOfOpponentEmptyBoxes === 6 ? <><PokemonPlaceholder/><PokemonPlaceholder/><PokemonPlaceholder/>
            <PokemonPlaceholder/><PokemonPlaceholder/><PokemonPlaceholder/></> : ''}
            
            {numberOfOpponentEmptyBoxes === 5 ? <><PokemonPlaceholder/><PokemonPlaceholder/><PokemonPlaceholder/>
            <PokemonPlaceholder/><PokemonPlaceholder/></> : ''}
            
            {numberOfOpponentEmptyBoxes === 4 ? <><PokemonPlaceholder/><PokemonPlaceholder/><PokemonPlaceholder/><PokemonPlaceholder/></> : ''}
            
            {numberOfOpponentEmptyBoxes === 3 ? <><PokemonPlaceholder/><PokemonPlaceholder/><PokemonPlaceholder/></> : ''}
            
            {numberOfOpponentEmptyBoxes === 2 ? <><PokemonPlaceholder/><PokemonPlaceholder/></> : ''}
            
            {numberOfOpponentEmptyBoxes === 1 ? <><PokemonPlaceholder/></> : ''}
        </OponentGrid>
      </PlayerContainer>

      <SelectArrow arrow='left' onClick={() => handlePrevGymLeader(gymLeaderId)}>
              <FontAwesomeIcon icon={faAngleLeft} />
      </SelectArrow>

       <SelectArrow arrow='right' onClick={() => handleNextGymLeader(gymLeaderId)}>
              <FontAwesomeIcon icon={faAngleRight} />
      </SelectArrow>
    </ScreenContainer>
  )

  function handleNextGymLeader(id)
  {
    if(id !== 8)
    {
      setGymLeaderId(id+1)
    }
  }

  function handlePrevGymLeader(id)
  {
    if(id !== 1)
    {
      setGymLeaderId(id-1)
    }
  }
}
