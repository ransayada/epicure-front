import styled from 'styled-components';

export const BagContainer = styled.div`
    width: 100vw;
    height: 30vh;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
    position: absolute;
    background-color: #ffffff;
    z-index: 10;
    border-bottom: 2px solid #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SmallContainer = styled.div`
    width: 40vw;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img {
        width: 40%;
        height: 40%;
    }
    .text {
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;
