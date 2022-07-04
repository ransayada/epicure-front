import styled from 'styled-components';

export const SearchContainer = styled.div`
    width: 100vw;
    height: 40vh;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #f5f5f5;
`;

export const SearchBox = styled.div`
    border: 1px solid #000000;
    border-radius: 5px;
    width: 90vw;
    height: 5vh;
    margin-top: -30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    input {
        width: 80%;
        border: none;
        color: lightgrey;
    }
    img {
    }
`;
