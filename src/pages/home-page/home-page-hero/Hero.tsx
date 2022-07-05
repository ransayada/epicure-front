import React from 'react';
import { HeroContainer, TextContainer, SearchBox } from './Hero.style';
import { default as glass } from '../../../assets/header-icons/magnify-glass-header.svg';

export const Hero: React.FC = () => {
    return (
        <>
            <HeroContainer>
                <TextContainer>
                    <p>Epicure works with the top chef restaurants in Tel Aviv</p>
                    <SearchBox>
                        <img src={glass} alt="" />
                        <input type="text" placeholder="Search for restaurant cuisine, chef" />
                    </SearchBox>
                </TextContainer>
            </HeroContainer>
        </>
    );
};
