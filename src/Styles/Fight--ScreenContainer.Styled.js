import styled from "styled-components";
import stars from '../images/starts.jpg'

export const ScreenContainer = styled.div`
    width: 1000px;
    height: 680px;
    border: 1px solid black;
    border-radius: 10px;
    background-image: url(${stars});
    position: relative;
`