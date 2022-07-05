import styled from 'styled-components';
import hero from '../../../assets/home-page-images/hero-picture.svg';

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 35vh;
    width: 100%;
    background-image: url(${hero});
`;
export const TextContainer = styled.div`
    height: 52%;
    width: 88%;
    background-color: rgba(255, 255, 255, 0.88);
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        font-style: normal;
        font-weight: 200;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 1.97px;
        text-align: center;
        margin-top: 2%;
    }
`;
export const SearchBox = styled.div`
    border: 1px solid #000000;
    border-radius: 5px;
    width: 80vw;
    height: 4vh;
    margin-top: -30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: -2%;

    input {
        width: 80%;
        border: none;
        color: lightgrey;
        background-color: transparent;
    }
    img {
    }
`;
