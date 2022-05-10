import styled from "styled-components";

export const PlayerContainer = styled.div`
    width: 800px;
    height: 240px;
    position: absolute;
    top: ${({player}) => player ? '100px' : '340px'};
    left: 100px;
    background-color: ${({player}) => player ? 'hsl(239, 44%, 53%)' : 'hsl(121, 57%, 37%)'};
`