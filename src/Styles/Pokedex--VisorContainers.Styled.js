import styled from "styled-components";

export const VisorContainer = styled.div`
    width: 300px;
    height: 300px;
    background-color: hsl(0,0%,87%);
    margin: 10% 22% 5% 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-bottom-left-radius: 55px 50px;
`

export const TopVisorContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
`

export const BottomVisorContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

export const SmallVisorContainer = styled.div`
    display: flex;
    justify-content: space-between;
`