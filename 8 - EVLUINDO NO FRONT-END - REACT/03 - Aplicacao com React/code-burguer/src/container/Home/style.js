import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #0A0A10;
   
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
    font-size: 17px;

    background: #D93856;
    border: none;

    color: #ffffff;

    cursor: pointer;
    
`;

export const InputLabel = styled.p`

    letter-spacing: -0.41px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    margin-left: 56px;
    margin-bottom: 2px;

`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    color: #ffffff;
    
    width: 342px;
    height: 58px;
    margin-left: 36px;

    font-size: 18px;
    line-height: 21px;

    border-radius: 14px;
    margin-bottom: 34px;
    border: none;

    
`;