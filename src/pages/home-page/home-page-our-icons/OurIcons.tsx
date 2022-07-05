import React from 'react';
import { OurIconsContainer, IconCard } from './OurIcons.style';
import { default as spicyIcon } from '../../../assets/home-page-images/spicy-icon.svg';
import { default as vegeIcon } from '../../../assets/home-page-images/vege-icon.svg';
import { default as veganIcon } from '../../../assets/home-page-images/vegan-icon.svg';

export const OurIcons: React.FC = () => {
    return (
        <>
            <OurIconsContainer>
                <p>OUR ICONS:</p>
                <IconCard>
                    <img src={spicyIcon} alt="" />
                    <p>Spicy</p>
                </IconCard>
                <IconCard>
                    <img src={vegeIcon} alt="" />
                    <p>Vegetarian</p>
                </IconCard>
                <IconCard>
                    <img src={veganIcon} alt="" />
                    <p>Vegan</p>
                </IconCard>
            </OurIconsContainer>
        </>
    );
};
