import styled from "styled-components";

export const PlayerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    & > div
    {
        border: 1px solid black;
        height: 100px;
        margin: 15px 10px 0px 10px;
        background-color: hsl(230, 100%, 22%);
    }

    & > div:first-child
    {
        grid-row: 1 / span 2;
        height: 215px;
        background-color: inherit;
    }
`