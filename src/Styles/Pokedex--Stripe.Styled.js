import styled from "styled-components";

export const Stripe = styled.div`
    width: ${({width}) => width || '50px'};
    height: 4px;
    border-radius: 500px;
    background-color: ${({color}) => color};
    margin-left: ${({marginLeft}) => marginLeft};
    margin-bottom: ${({marginBottom}) => marginBottom || '0px'};
`