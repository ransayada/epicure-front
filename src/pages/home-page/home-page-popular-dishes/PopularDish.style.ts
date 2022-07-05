import styled from 'styled-components';

export const PopularDishContainer = styled.div`
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    width: 100%;
`;

export const Title = styled.div``;
export const GridSlickContainer = styled.div``;
export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 36vw;
    p {
        color: #000000;
    }

    img {
        margin-bottom: -30%;
        width: 5vw;
        height: 5vh;
    }
`;
