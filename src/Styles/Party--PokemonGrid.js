import styled from "styled-components";
import pokemonCity from '../images/pokemonCity.jpg'

export const PokemonGrid = styled.div`
    max-width: 1000px;
    height: 680px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: hsl(242, 60%, 90%);
    border-radius: 10px;
    border: 1px solid black;
    background-image: url(${pokemonCity});
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: blur(80px);

`