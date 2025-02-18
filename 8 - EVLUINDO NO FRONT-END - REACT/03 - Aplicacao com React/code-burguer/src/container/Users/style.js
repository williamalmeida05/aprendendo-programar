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
    font-weight: bold;

    background: rgba(255, 255, 255, 0.14);

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

`;

export const User = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 342px;
    height: 101px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    border: none;

    margin-top: 20px;
    padding: 0 20px;

    div {
        display: flex;
        flex-direction: column; /* Empilha nome e idade */
        align-items: flex-start; /* Alinha os textos à esquerda */
        gap: 30px;
    }

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        margin: 0;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
        margin-top: 10px;
        
    }

`