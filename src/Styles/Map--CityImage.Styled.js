import styled from "styled-components";

export const CityImage = styled.div`
    width: 350px;
    height: 185px;
    background-image: ${({img}) => `url(${img})`};
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 10px;
`