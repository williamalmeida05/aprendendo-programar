import styled from 'styled-components'; // Importando a biblioteca styled-components
import Backgroud from '../../assets/backgroud1.svg'; // importando a imagem que será utilizada de background

export const Container = styled.div`
    background: url("${Backgroud}"); // incluindo o background na área
    background-size: cover; //irá cobrir a área sem que repita

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100vh;
`;

export const Image = styled.img`

`;



export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color: #eeeeee;

    margin-left: 25px;
    
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    width: 342px;
    height: 58px;
    padding-left: 25px;
    
    border: none;
    outline: none;

    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;

    color: #FFFFFF;

    margin-bottom: 34px;
`;


