import styled from "styled-components";

export const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 680px;
    width: 50px;
    border: 1px solid black;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color:  hsl(350,92%,45%);
    margin-top: 10px;
    transition-property: width;
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;

    &:hover
    {
        width: 150px;
    }

    & img
    {
        cursor: pointer;
        height: 100px;
        width: 100px;
        margin-left: 5px;
        margin-bottom: 20px;
    }

    & img:first-child
    {
        height: 160px;
        width: 160px;
        margin-left: -5px;
        margin-top: 30px;
    }

    & img:nth-child(2)
    {
        cursor: pointer;
        height: 100px;
        width: 100px;
        margin-left: 15px;
        border: 3px solid black;
        border-radius: 50%;
    }

    & img:nth-child(3)
    {
        height: 110px;
        width: 110px;
        margin-top: 20px;
        margin-left: 10px;
        border: 3px solid black;
        border-radius: 50%;
       
    }

    & img:nth-child(4)
    {
        height: 120px;
        width: 100px;
        margin-top: 20px;
        margin-left: 10px;
       
    }
`