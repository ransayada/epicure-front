import styled from 'styled-components';

export const AboutUsContainer = styled.div`
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 130vh;
    width: 100%;
    background-color: #fafafa;
`;

export const ImageContainer = styled.div`
    margin-top: 6vh;
`;
export const ButtonsContainer = styled.div`
    margin-top: 6vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 16vh;
`;
export const TextContainer = styled.div`
    margin-top: 6vh;

    p {
        font-style: normal;
        font-weight: 200;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 2.14px;
        width: 90%;
    }
`;
export const MyButton = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 38vw;
    height: 5vh;
    border-radius: 10px;
    padding: 5%;
`;
export const MyImg = styled.div``;
export const MyText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 6vh;
    margin-top: -2vh;
`;

export const SmallText = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1.29px;
    height: 2vh;
`;
export const BigText = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    letter-spacing: 1.29px;
`;

export const Title = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
`;
