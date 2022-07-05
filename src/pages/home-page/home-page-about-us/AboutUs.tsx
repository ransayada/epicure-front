import React from 'react';
import { AboutUsContainer, ImageContainer, ButtonsContainer, TextContainer, MyButton, MyImg, MyText,SmallText,BigText,Title } from './AboutUs.style';
import { default as logo } from '../../../assets/home-page-images/about-logo.svg';
import { default as apple } from '../../../assets/home-page-images/apple-store-icon.svg';
import { default as google } from '../../../assets/home-page-images/google-play-icon.svg';

export const AboutUs: React.FC = () => {
    return (
        <>
            <AboutUsContainer>
                <ImageContainer>
                    <img src={logo} alt="" />
                </ImageContainer>
                <ButtonsContainer>
                    <MyButton>
                        <MyImg>
                            {' '}
                            <img src={google} alt="" />
                        </MyImg>
                        <MyText>
                            <SmallText>
                                <p>Get it on</p>
                            </SmallText>
                            <BigText>
                                <p>Google Play</p>
                            </BigText>
                        </MyText>
                    </MyButton>
                    <MyButton>
                        <MyImg>
                            {' '}
                            <img src={apple} alt="" />
                        </MyImg>
                        <MyText>
                            <SmallText>
                                <p>Download on the</p>
                            </SmallText>
                            <BigText>
                                <p>App Store</p>
                            </BigText>
                        </MyText>
                    </MyButton>
                </ButtonsContainer>
                <TextContainer>
                    <Title><p>ABOUT US:</p></Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta. Vivamus elit urna, dignissim a vestibulum.</p>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.</p>
                </TextContainer>
            </AboutUsContainer>
        </>
    );
};
