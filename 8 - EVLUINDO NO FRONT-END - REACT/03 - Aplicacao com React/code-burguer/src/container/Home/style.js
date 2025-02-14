import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #000000;
   
    height: 100vh;
    gap: 18px;

    font-family: 'Roboto', sans-serif;
    color: #ffffff;

`;

export const Image = styled.img`
    width: 342px;
    height: 354px;
    margin-top: 11px;
    margin-left: 36px;
`;

export const Button = styled.button`
    width: 342px;
    height: 68px;
    margin-top: 77px;
    margin-left: 36px;

    background: #D93856;

    color: #ffffff;

    cursor: pointer;
    
`;

export const InputLabel = styled.p`

    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.41px;

    margin-left: 56px;

`;

export const Input = styled.input`
    width: 342px;
    height: 58px;

    margin-bottom: 34px;
`;