import styled from 'styled-components';

export const MyFooterContainer = styled.div`
    position: fixed;
    bottom: 0;

    height: 20vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 2px solid #f5f5f5;

    @media only screen and (min-width: 768px) {
    }
`;

export const MenuBar = styled.div`
    font-family: 'Nunito', sans-serif;
    margin-left: 4%;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
`;
