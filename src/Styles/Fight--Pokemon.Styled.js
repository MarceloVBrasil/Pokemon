import styled from "styled-components";

export const Pokemon = styled.div`
    background-image: ${({pokemon}) => `url(${pokemon})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
`