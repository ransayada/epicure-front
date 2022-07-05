import React from 'react';
import { PopularDishContainer, Title, GridSlickContainer, LinkContainer } from './PopularDish.style';
import { NavLink } from 'react-router-dom';
import { default as doubleArrow } from '../../../assets/home-page-images/double-arrow.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { dishes } from '../../../data/dishes'; //dummy data
import { DishCard } from './dish-card/DishCard';

export const PopularDish: React.FC = () => {
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
                    {dishes.map((dish) => {
                        return <DishCard {...dish} key={dish._id} />;
                    })}
                </Slider>
                {/* </MySlider> */}
                {/* <MyGrid>
                    <DishCard {...dishes[0]} key={0}/>  
                    <DishCard {...dishes[1]} key={1}/>  
                    <DishCard {...dishes[2]} key={2}/>  
            </MyGrid> */}
            </>
        );
    };
    return (
        <>
            <PopularDishContainer>
                <Title>
                    <p>POPULAR DISHES EPICURE:</p>
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
            </PopularDishContainer>
        </>
    );
};
