import styled from "styled-components";

export const LocationOuterContainer = styled.div`
    width: 20px;
    height: 20px;
    border: 4px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: ${({bottom}) => bottom};
    top: ${({top}) => top};
    left: ${({left}) => left};
    right: ${({right}) => right};
    cursor: pointer;

    &:hover
    {
        background-color: lightblue;
    }

    &:hover > div
    {
        background-color: white;
    }
`

export const LocationInnerContainer = styled.div`
    width: 10px;
    height: 10px;
    border: 2px solid blue;
    border-radius: 40%;
`