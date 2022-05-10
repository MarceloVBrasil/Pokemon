import styled from "styled-components";
import worldMap from '../images/game-map.jpg'

export const MapContainer = styled.div`
    width: 1000px;
    height: 680px;
    border: 1px solid black;
    border-radius: 10px;
    background-image: url(${worldMap});
    background-size: cover;
    position: relative;
`