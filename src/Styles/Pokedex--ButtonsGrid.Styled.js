import styled from "styled-components";

export const ButtonsGrid = styled.div`
    display: grid;
    grid-template-columns: ${({numberOfColumns}) => `repeat(${numberOfColumns}, 1fr)`};
    margin-left: 47px;
`