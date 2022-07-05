import styled from 'styled-components';

export const MyHeaderContainer = styled.div`
    background-color: #fafafa;
    min-height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    color: #000000;
    @media only screen and (min-width: 768px) {
    }
`;

export const LeftSide = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    margin-left: 2%;
    align-items: center;
`;
export const Middle = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -2%;
`;
export const RightSide = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
