import React, { useState } from 'react';
import { MyHeaderContainer, LeftSide, Middle, RightSide } from './MyHeader.style';
import { default as hamburger } from '../../../assets/header-icons/hamburger-header.svg';
import { default as logo } from '../../../assets/header-icons/epicure-logo-header.svg';
import { default as glass } from '../../../assets/header-icons/magnify-glass-header.svg';
import { default as user } from '../../../assets/header-icons/person-header.svg';
import { default as bag } from '../../../assets/header-icons/shopping-bag-header.svg';
import { default as x } from '../../../assets/header-icons/x-header.svg';

import { Bag } from './bag/Bag';
import { Menu } from './menu/Menu';
import { Search } from './search/Search';

export const MyHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
    const [isBagOpen, setIsBagOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
        if (isSearchOpen) {
            setIsSearchOpen((prevIsSearchOpen) => !prevIsSearchOpen);
        }
        if (isLoginOpen) {
            setIsLoginOpen((prevIsLoginOpen) => !prevIsLoginOpen);
        }
        if (isBagOpen) {
            setIsBagOpen((prevIsBagOpen) => !prevIsBagOpen);
        }
    };

    const toggleSearch = () => {
        setIsSearchOpen((prevIsSearchOpen) => !prevIsSearchOpen);
        if (isMenuOpen) {
            setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
        }
        if (isLoginOpen) {
            setIsLoginOpen((prevIsLoginOpen) => !prevIsLoginOpen);
        }
        if (isBagOpen) {
            setIsBagOpen((prevIsBagOpen) => !prevIsBagOpen);
        }
    };
    const toggleLogin = () => {
        setIsLoginOpen((prevIsLoginOpen) => !prevIsLoginOpen);
        if (isMenuOpen) {
            setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
        }
        if (isSearchOpen) {
            setIsSearchOpen((prevIsSearchOpen) => !prevIsSearchOpen);
        }
        if (isBagOpen) {
            setIsBagOpen((prevIsBagOpen) => !prevIsBagOpen);
        }
    };
    const toggleBag = () => {
        setIsBagOpen((prevIsBagOpen) => !prevIsBagOpen);
        if (isMenuOpen) {
            setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
        }
        if (isSearchOpen) {
            setIsSearchOpen((prevIsSearchOpen) => !prevIsSearchOpen);
        }
        if (isLoginOpen) {
            setIsLoginOpen((prevIsLoginOpen) => !prevIsLoginOpen);
        }
    };
    return (
        <>
            <MyHeaderContainer>
                <LeftSide>{isMenuOpen ? <img src={x} alt="" onClick={toggleMenu} /> : <img src={hamburger} alt="" onClick={toggleMenu} />}</LeftSide>
                <Middle>
                    <img
                        src={logo}
                        alt=""
                        onClick={() => {
                        }}
                    />
                </Middle>
                <RightSide>
                    <img
                        src={glass}
                        alt=""
                        onClick={() => {
                            toggleSearch();
                        }}
                    />
                    <img
                        src={user}
                        alt=""
                        onClick={() => {
                            toggleLogin();
                        }}
                    />
                    <img
                        src={bag}
                        alt=""
                        onClick={() => {
                            toggleBag();
                        }}
                    />
                </RightSide>
            </MyHeaderContainer>
            {isMenuOpen && <Menu />}
            {isSearchOpen && <Search />}
            {isLoginOpen && <div></div>}
            {isBagOpen && <Bag />}
        </>
    );
};
