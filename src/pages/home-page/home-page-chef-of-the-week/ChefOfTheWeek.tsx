import React from 'react';
import { ChefOfTheWeekContainer, Title, ImageContainer, TextContainer,Name } from './ChefOfTheWeek.style';
import { default as yossi } from '../../../assets/home-page-images/yossi-svg.svg';

export const ChefOfTheWeek: React.FC = () => {
    return (
        <>
            <ChefOfTheWeekContainer>
                <Title>CHEF OF THE WEEK:</Title>
                <ImageContainer>
                    <img src={yossi} alt="" />
                    <Name><p>Yossi Shitrit</p></Name>
                </ImageContainer>
                <TextContainer>
                    <p>
                        Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered
                        Violet, located in Moshav Udim. Shitrit's creativity and culinary acumen born of long experience are expressed in the every detail of each and every dish.
                    </p>
                </TextContainer>
            </ChefOfTheWeekContainer>
        </>
    );
};
