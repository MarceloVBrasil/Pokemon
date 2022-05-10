import styled from "styled-components";

export const OponentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    & > div
    {
        border: 1px solid black;
        height: 100px;
        margin-top: 15px;
        margin: 15px 10px 0px 10px;
        background-color: hsl(173, 82%, 15%);
    }

    & > div:first-child
    {
        grid-column-start: 4;
        grid-row-start: 1;
        grid-row-end: 3;
        height: 215px;
        text-transform: uppercase;
        background-color: inherit;
    }
`