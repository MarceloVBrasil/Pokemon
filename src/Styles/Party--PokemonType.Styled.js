import styled from "styled-components";

export const PokemonType = styled.h4`
    margin-left: 7px;
    color: white;
    border: 1px solid black;
    border-radius: 5px;
    padding: 1px 3px;
    background-color: ${({colorType}) => 
        colorType === "fire"       ? 'hsl(25, 86%, 56%)'  :
        colorType === 'flying'     ? 'hsl(255, 76%, 75%)' :
        colorType == 'water'       ? 'hsl(222, 82%, 67%)' :
        colorType === 'grass'      ? 'hsl(100, 52%, 55%)' :
        colorType === 'poison'     ? 'hsl(300, 43%, 44%)' :
        colorType === 'normal'     ? 'hsl(60, 22%, 56%)'  :
        colorType === 'electric'    ? 'hsl(48, 93%, 58%)'  :
        colorType === 'ice'        ? 'hsl(180, 45%, 72%)' :
        colorType === 'fighting'   ? 'hsl(3, 66%, 45%)'   :
        colorType === 'ground'     ? 'hsl(44, 66%, 64%)'  :
        colorType === 'psychic'    ? 'hsl(342, 92%, 66%)' :
        colorType === 'bug'        ? 'hsl(66, 70%, 42%)'  :
        colorType === 'rock'       ? 'hsl(49, 53%, 47%)'  :
        colorType === 'ghost'      ? 'hsl(262, 27%, 47%)' :
        colorType === 'dark'       ? 'hsl(24, 22%, 36%)'  :
        colorType === 'dragon'     ? 'hsl(258, 93%, 60%)' :
        colorType === 'steel'      ? 'hsl(240, 20%, 77%)' :
        colorType === 'fairy'      ? 'hsl(354, 66%, 83%)' :
        ''};

    &:first-child
    {
        margin-left: 20px;
    }
`