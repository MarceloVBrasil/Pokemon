import styled from "styled-components";

export const Opponent = styled.div`
    background-image: ${({pic}) => `url(${pic})`};
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50% 100%;
`