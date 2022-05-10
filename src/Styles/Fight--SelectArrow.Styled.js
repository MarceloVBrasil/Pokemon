import styled from "styled-components";

export const SelectArrow = styled.button`
    position: absolute;
    top: 340px;
    left: ${({arrow}) => arrow === 'left' ? '50px' : '950px'};
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 30px;
    color: rgba(255,255,255,0.0);

    &:hover
    {
        color:rgba(255,255,255,1);        
    }
`