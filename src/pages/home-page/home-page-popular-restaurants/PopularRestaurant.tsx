import React from 'react';
import { NavLink } from 'react-router-dom';
import { PopularRestaurantContainer, Title, GridSlickContainer, LinkContainer, MyImage } from './PopularRestaurant.style';
import { default as doubleArrow } from '../../../assets/home-page-images/double-arrow.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { restaurants } from '../../../data/restaurants';
import { RestaurantCard } from './restaurant-card/RestaurantCard';

export const PopularRestaurant: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        draggable: true
    };
    const getComponent = () => {
        return (
            <>
                {/* <MySlider> */}
                <Slider {...settings}>
                    {restaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant} key={restaurant._id} />;
                    })}
                </Slider>
                {/* </MySlider> */}
                {/* <MyGrid>
                    <RestCard {...restaurants[0]} key={0}/>  
                    <RestCard {...restaurants[1]} key={1}/>  
                    <RestCard {...restaurants[2]} key={2}/>  
            </MyGrid> */}
            </>
        );
    };
    return (
        <>
            <PopularRestaurantContainer>
                <Title>
                    <p>POPULAR RESTAURANTS EPICURE:</p>
                </Title>
                <GridSlickContainer>{getComponent()}</GridSlickContainer>
                    <NavLink style={{ textDecoration: 'none' }} to="/restaurants">
                <LinkContainer>
                        <div>
                            <p>All Restaurants</p>
                        </div>
                        <div>
                            <img src={doubleArrow} alt="arrow" />
                        </div>
                </LinkContainer>
                    </NavLink>
            </PopularRestaurantContainer>
        </>
    );
};
