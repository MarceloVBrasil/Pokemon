import styled from "styled-components";

export const BigScreen = styled.div`
    width: 200px;
    height: ${isOn => isOn ? '200px' : '254.8'};
    border-radius: 10px;
    background-color:${({isOn}) => isOn ? 'white' : 'hsl(0,0%,13%)'};
    border: 1px solid black;
    margin: 10px 0px
`