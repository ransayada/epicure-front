import React from 'react';
import { NavLink } from 'react-router-dom';
import { RestaurantCardContainer,ImageContainer,TextContainer,Bold,NotBold } from './RestaurantCard.style';

type RestaurantProps = {
    _id:string,
    name:string,
    chef:string,
    thumb:string,
    cdn:string,
    stars:number
  }

export const RestaurantCard: React.FC<RestaurantProps> = ({name,chef,cdn,stars,_id}:RestaurantProps) => {
    return (
        <>
            <NavLink style={{ textDecoration:'none'}} to={`/restaurants/${_id}`}>
                <RestaurantCardContainer>
                    <ImageContainer>
                        <img src={`${cdn}`} alt={`${name}`} />
                    </ImageContainer>
                    <TextContainer>
                        <Bold>{name}</Bold>
                        <NotBold>{chef}</NotBold>
                    </TextContainer>
                </RestaurantCardContainer>
            </NavLink>
        </>
    );
};

export default RestaurantCard;
