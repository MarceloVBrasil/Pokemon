import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareCaretLeft,faSquareCaretRight,faSquareCaretUp, faSquareCaretDown, faCircleDot, faStar}
from '@fortawesome/free-solid-svg-icons'
import {PokeApi} from './PokeApi'
import { Stripe } from '../Styles/Pokedex--Stripe.Styled'
import { SmallScreen } from '../Styles/Pokedex--SmallScreen.Styled'
import { MediumScreen } from '../Styles/Pokedex--MediumScreen.Styled'
import { BigScreen } from '../Styles/Pokedex--BigScreen.Styled'
import PokemonImage from './PokemonImage'
import { PokemonCapturedScreen } from '../Styles/Pokedex--PokemonCapturedScreen.Styled'
import { BottomVisorContainer, SmallVisorContainer, TopVisorContainer, VisorContainer } 
from '../Styles/Pokedex--VisorContainers.Styled'
import { SoundContainer } from '../Styles/Pokedex--SoundContainer.Styled'
import { LeftSidePokedexContainer, PokedexContainer, RightSidePokedexContainer } 
from '../Styles/Pokedex--PokedexContainer.Styled'
import { HeaderContainer } from '../Styles/Pokedex--HeaderContainer.Styled'
import { BottomCenterContainer, BottomLeftContainer, BottomLeftStripesContainer } 
from '../Styles/Pokedex--LeftBottomContainers.Styled'
import { SquareButton } from '../Styles/Pokedex--SquareButton.Styled'
import { ButtonsGrid } from '../Styles/Pokedex--ButtonsGrid.Styled'
import { FlexContainer, RightStripesContainer } from '../Styles/Pokedex--RightBottomContainers.Styled'
import { PokemonInfo } from '../Styles/Pokedex--PokemonInfo.Styled'
import { Box, DPadHorizontalContainer, DPadVerticalContainer } from '../Styles/Pokedex--DPad.Styled'
import { BigBlueCircle, MediumBlackCircle, MediumYellowCircle, SmallGreenCircle, SmallRedCircle, 
    SmallYellowCircle, VisorCircle } from '../Styles/Pokedex--Circles.Styled' 
import { useMyPokemons } from './Contexts/MyPokemonsProvider'

export default function Pokedex() {
    const [pokemon, pokeId, setPokeId] = PokeApi()
    const [isOn, setIsOn] = useState(false)
    const {addPokemonToParty, removePokemonFromParty, myPokemonParty} = useMyPokemons()
    const disableButton = !isOn

    
    
  return (
    <PokedexContainer>
      <LeftSidePokedexContainer>
        <HeaderContainer>
            <BigBlueCircle />
            <SmallRedCircle />
            <SmallYellowCircle />
            <SmallGreenCircle />
        </HeaderContainer>
        
        <VisorContainer>
            <TopVisorContainer>
               <VisorCircle bottom={false}/>
                <VisorCircle bottom={false}/>
            </TopVisorContainer>
            {isOn ? <BigScreen isOn={true}><PokemonImage src={pokemon.pic}/></BigScreen> 
            : <BigScreen isOn={false}/>}        
            <BottomVisorContainer>
                <VisorCircle bottom={true}/>
                <SoundContainer>
                    <Stripe color={'hsl(30,1%,44%)'} width={'30px'} marginBottom={'2px'}/>
                    <Stripe color={'hsl(30,1%,44%)'} width={'30px'} marginBottom={'2px'}/>
                    <Stripe color={'hsl(30,1%,44%)'} width={'30px'} marginBottom={'2px'}/>
                    <Stripe color={'hsl(30,1%,44%)'} width={'30px'} marginBottom={'2px'}/>                    
                </SoundContainer>
            </BottomVisorContainer>           
        </VisorContainer> 

        <BottomLeftContainer>           
            <MediumBlackCircle onClick={handlePowerButton}/>
            <BottomCenterContainer>
                <BottomLeftStripesContainer>
                     <Stripe color={'hsl(350, 91%, 26%)'}/>
                     <Stripe color={'hsl(203, 76%, 35%)'}/>
                </BottomLeftStripesContainer>
                <PokemonCapturedScreen>{isOn ? 
                    myPokemonParty.find(p => p.id === pokemon.id) ?
                    <FontAwesomeIcon icon={faStar} />: '' : ''}
                </PokemonCapturedScreen>
            </BottomCenterContainer>
                <DPadVerticalContainer>
                    <Box><FontAwesomeIcon icon={faSquareCaretUp} /></Box>
                    <DPadHorizontalContainer>
                        <Box position={'absolute'} onClick={() => prevPokemon(pokeId)} cursor={'pointer'}>
                            <FontAwesomeIcon icon={faSquareCaretLeft} />
                        </Box>
                        <Box><FontAwesomeIcon icon={faCircleDot} /></Box>
                        <Box onClick={() => nextPokemon(pokeId)} cursor={'pointer'}>
                            <FontAwesomeIcon icon={faSquareCaretRight} />
                        </Box>
                    </DPadHorizontalContainer>
                    <Box><FontAwesomeIcon icon={faSquareCaretDown} /></Box>
                </DPadVerticalContainer>
        </BottomLeftContainer>
      </LeftSidePokedexContainer>
      
      <RightSidePokedexContainer>
        <MediumScreen>
            {isOn ? <PokemonInfo>{pokemon.id} - {pokemon.name}</PokemonInfo> : '' }
            { isOn ? pokemon.type && pokemon.type.map((type, index) => {
                return (
                    <PokemonInfo key={index}> Type {index+1} - {type.type.name}</PokemonInfo>
                )
            }):''} 
        </MediumScreen>
        <ButtonsGrid numberOfColumns={5}>
            <SquareButton color={'hsl(203, 98%, 57%)'} hColor={'hsl(203, 98%, 77%)'}
            onClick={() => goToPokemon81()}/>
            <SquareButton color={'hsl(203, 98%, 57%)'} hColor={'hsl(203, 98%, 77%)'}
            onClick={() => goToPokemon162()}/>
            <SquareButton color={'hsl(203, 98%, 57%)'} hColor={'hsl(203, 98%, 77%)'}
            onClick={() => goToPokemon243()}/>
            <SquareButton color={'hsl(203, 98%, 57%)'} hColor={'hsl(203, 98%, 77%)'}
            onClick={() => goToPokemon324()}/>
            <SquareButton color={'hsl(203, 98%, 57%)'} hColor={'hsl(203, 98%, 77%)'}
            onClick={() => goToPokemon405()}/>
            <SquareButton color={'hsl(203, 98%, 57%)'} hColor={'hsl(203, 98%, 77%)'}
            onClick={() => goToPokemon486()}/>
            <SquareButton color={'hsl(203, 98%, 57%)'} hColor={'hsl(203, 98%, 77%)'}
            onClick={() => goToPokemon567()}/>
            <SquareButton color={'hsl(203, 98%, 57%)'} hColor={'hsl(203, 98%, 77%)'}
            onClick={() => goToPokemon648()}/>
            <SquareButton color={'hsl(203, 98%, 57%)'} hColor={'hsl(203, 98%, 77%)'}
            onClick={() => goToPokemon729()}/>
            <SquareButton color={'hsl(203, 98%, 57%)'} hColor={'hsl(203, 98%, 77%)'}
            onClick={() => goToPokemon810()}/>
        </ButtonsGrid>
        <RightStripesContainer>
           <Stripe color={'hsl(220, 7%, 8%)'}/>
            <Stripe color={'hsl(220, 7%, 8%)'} marginLeft={'5px'}/>
        </RightStripesContainer>
        <FlexContainer>
            <ButtonsGrid numberOfColumns={2}>
               <SquareButton color={'hsl(0, 0%, 87%)'} hColor={'hsl(0, 0%, 97%)'}
                disabled={disableButton} onClick={() => addPokemonToParty(pokemon)}/>
               
               <SquareButton color={'hsl(0, 0%, 87%)'} hColor={'hsl(0, 0%, 97%)'}
                disabled={disableButton} onClick={() => removePokemonFromParty(pokeId)}/>
            </ButtonsGrid>
            <MediumYellowCircle />
        </FlexContainer>
        <SmallVisorContainer>
            <SmallScreen />
            <SmallScreen />
        </SmallVisorContainer>        
      </RightSidePokedexContainer>
    </PokedexContainer>
  )

    function handlePowerButton()
    {
        setPokeId(1)
        setIsOn(prev => !prev)
    }

    function nextPokemon(id)
    {
        if(isOn && id !== 898) setPokeId(id+1)
    }

    function prevPokemon(id)
    {
        if(isOn && id !== 1) setPokeId(id-1)
    }

   function goToPokemon81()
    {
        if(isOn) setPokeId(81)
    }

    function goToPokemon162()
    {
        if(isOn) setPokeId(162)
    }

    function goToPokemon243()
    {
        if(isOn) setPokeId(243)
    }

    function goToPokemon324()
    {
        if(isOn) setPokeId(324)
    }

     function goToPokemon405()
    {
        if(isOn) setPokeId(405)
    }

    function goToPokemon486()
    {
        if(isOn) setPokeId(486)
    }

    function goToPokemon567()
    {
        if(isOn) setPokeId(567)
    }

    function goToPokemon648()
    {
        if(isOn) setPokeId(648)
    }

    function goToPokemon729()
    {
        if(isOn) setPokeId(729)
    }

    function goToPokemon810()
    {
        if(isOn) setPokeId(810)
    }

}
