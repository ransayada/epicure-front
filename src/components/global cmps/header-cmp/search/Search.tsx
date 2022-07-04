import React from 'react';
import { SearchContainer, SearchBox } from './Search.style';
import { default as glass } from '../../../../assets/header-icons/magnify-glass-header.svg';

export const Search: React.FC = () => {
    return (
        <>
            <SearchContainer>
                <SearchBox>
                <img
                        src={glass}
                        alt=""
                        
                    />
                    <input type="text" placeholder="Search for restaurant cuisine, chef" />
                </SearchBox>
            </SearchContainer>
        </>
    );
};
