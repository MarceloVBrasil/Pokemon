import styled from "styled-components";

export const DPadVerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const DPadHorizontalContainer = styled.div`
    display: flex;
`

export const Box = styled.div`
    width: 50px;
    height: 50px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    position: ${({position}) => position || 'static'};
    left: 372px;
    color: white;
    cursor: ${({cursor}) => cursor || 'default'}
`