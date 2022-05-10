import styled from "styled-components";

export const PokemonContainer = styled.div`
    box-sizing: border-box;
    width: 220px;
    padding-left: 25px;
    height: 140px;
    border-radius: 20px / 100px;
    margin-left: 80px;
    border: 1px solid black;
    background-color: hsl(77, 100%, 92%);
    background-image: ${({image}) => `url(${image})`};
    background-repeat: no-repeat;
    background-position: 50% 50%;
    text-transform: capitalize;
    position: relative;

    &:nth-child(n+0):nth-child(-n + 3)
    {
        margin-top: 150px;
        margin-left: 40px;
    }

    &:nth-child(n+4):nth-child(-n + 6)
    {
        margin-top: -50px;
    }

    & > h2
    {
        margin: 5px 0px 0px 45px;
    }

`