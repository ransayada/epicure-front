import styled from 'styled-components';

export const MenuContainer = styled.div`
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

    @media only screen and (min-width: 768px) {
    }
`;
export const MyXContainer = styled.div`
    @media only screen and (min-width: 768px) {
    }
`;
export const MyMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 40vh;
    justify-content: space-around;
    @media only screen and (min-width: 768px) {
    }
`;
export const MenuBar = styled.div`
    margin-left: 2%;
    @media only screen and (min-width: 768px) {
    }
`;
export const MenuBarContainer = styled.div`
    height: 20vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media only screen and (min-width: 768px) {
    }
`;
