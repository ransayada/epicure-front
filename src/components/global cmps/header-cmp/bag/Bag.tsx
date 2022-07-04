import React from 'react';
import { BagContainer, SmallContainer } from './Bag.style';
import { default as bag } from '../../../../assets/header-icons/shopping-bag-header.svg';

export const Bag: React.FC = () => {
    return (
        <>
            <BagContainer>
                <SmallContainer>
                    <img src={bag} alt="" />
                    <div className="text">
                        <p>YOUR BAG IS EMPTY</p>
                    </div>
                </SmallContainer>
            </BagContainer>
        </>
    );
};
