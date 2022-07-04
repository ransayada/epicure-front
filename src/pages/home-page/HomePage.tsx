import React from 'react';
import { HomePageContainer } from './HomePage.style';
import { Hero } from './home-page-hero/Hero';
import { PopularRestaurant } from './home-page-popular-restaurants/PopularRestaurant';
import { PopularDish } from './home-page-popular-dishes/PopularDish';
import { OurIcons } from './home-page-our-icons/OurIcons';
import { ChefOfTheWeek } from './home-page-chef-of-the-week/ChefOfTheWeek';
import { AboutUs } from './home-page-about-us/AboutUs';

export const HomePage: React.FC = () => {
    return (
        <>
            <HomePageContainer>
                <Hero />
                <PopularRestaurant />
                <PopularDish />
                <OurIcons></OurIcons>
                <ChefOfTheWeek></ChefOfTheWeek>
                <AboutUs></AboutUs>
            </HomePageContainer>
        </>
    );
};
