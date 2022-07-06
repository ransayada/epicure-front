import styled from 'styled-components';
import yossi from '../../../assets/home-page-images/yossi-svg.svg';

export const ChefOfTheWeekContainer = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100%;
    padding: 5%;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 6vh;
    width: 100%;
`;
export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 40vh;
    width: 100%;
`;

export const Name = styled.div`
    margin-top: -16%;
    background-color: rgba(255, 255, 255, 0.8);
    p {
        height: 4vh;
        width: 89vw;
        text-align: center;
    }
`;
export const TextContainer = styled.div`
    width: 90vw;
    height: 40vh;
    margin-left: -10%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 28px;
    text-align: justify;
    letter-spacing: 1.25px;
`;
