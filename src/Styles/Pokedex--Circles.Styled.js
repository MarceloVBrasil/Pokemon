import styled from "styled-components";

export const BigBlueCircle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 10px solid #919291;
    background-color: hsl(203, 75%, 36%);
    box-shadow: 0px 0px 20px white inset,
    25px 25px 20px hsl(203, 98%, 57%) inset;
    margin: 5px 300px 5px 10px;
    
`

export const MediumYellowCircle = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: hsl(51, 81%, 35%);
    box-shadow: 0px 0px 20px hsl(52, 94%, 57%) inset,
     25px 25px 20px hsl(51, 81%, 37%) inset;
    margin: 5px 10px;
`

export const MediumBlackCircle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: black;
    box-shadow: 0px 0px 20px hsl(175, 100%, 9%) inset,
     0px 0px 20px hsl(175, 100%, 1%) inset;
     cursor: pointer;
`

export const SmallRedCircle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid black;
    margin: 7px 5px;
    background-color: hsl(350, 93%, 33%);
    box-shadow: 0px 0px 20px hsl(350, 93%, 73%) inset,
    0px 0px 20px rgb(164, 6, 32) inset;

`

export const SmallYellowCircle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid black;
    margin: 7px 5px;
    background-color: hsl(51, 81%, 35%);
    box-shadow: 0px 0px 20px hsl(51, 81%, 75%) inset,
    0px 0px 20px hsl(51, 81%, 35%) inset;

`

export const SmallGreenCircle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid black;
    margin: 7px 5px;
    background-color: hsl(144, 29%, 27%);
    box-shadow: 0px 0px 20px hsl(144, 29%, 77%) inset,
    0px 0px 20px hsl(144, 29%, 27%) inset;

`

export const VisorCircle = styled.div`
    width: ${({bottom}) => bottom ? '20px' : '10px'};
    height: ${({bottom}) => bottom ? '20px' : '10px'};
    border-radius: 50%;
    border: 1px solid black;
    background-color: hsl(350, 93%, 33%);
`