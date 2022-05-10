import styled from "styled-components";

export const SquareButton = styled.button`
    width: 70px;
    height: 70px;
    border: 1px solid black;
    background-color: ${({color}) => color};
    cursor: pointer;

    &:hover 
    {
        background-color: ${({hColor}) => hColor};
    }
`