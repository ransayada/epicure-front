import React from 'react';
import { DishCardContainer } from './DishCard.style';

type DishProps = {
    name: string;
    ingredients: string;
    image: string;
    cdn: string;
    price: number;
};

export const DishCard: React.FC<DishProps> = ({ name, ingredients, price, cdn }: DishProps) => {
    return (
        <>
            <DishCardContainer>{name}</DishCardContainer>
        </>
    );
};
