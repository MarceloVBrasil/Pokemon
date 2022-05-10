import styled from "styled-components";
import img from '../images/pokeball.png'

export const EmptyBox = styled.div`
    box-sizing: border-box;
    width: 220px;
    padding-left: 25px;
    height: 140px;
    border-radius: 20px / 100px;
    margin-left: 80px;
    border: 1px solid black;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 90%;
    text-transform: capitalize;

    &:nth-child(n+0):nth-child(-n + 3)
    {
        margin-top: 150px;
        margin-left: 40px;
    }

    &:nth-child(n+4):nth-child(-n + 6)
    {
        margin-top: -50px;
    }

`