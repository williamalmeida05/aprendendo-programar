import styled from 'styled-components'; // Importando a biblioteca styled-components
import Backgroud from '../../assets/backgroud.svg'; // importando a imagem que será utilizada de background

export const Container = styled.div`
    background: url("${Backgroud}"); // incluindo o background na área
    background-size: cover; //irá cobrir a área sem que repita

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img`

`;


export const User = styled.li`

    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 342px;
    height: 58px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    border: none;

    margin-top: 20px;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

`;
