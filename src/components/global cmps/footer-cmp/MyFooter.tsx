import React from 'react';
import { NavLink } from 'react-router-dom';
import { MyFooterContainer , MenuBar } from './MyFooter.style';

export const MyFooter: React.FC = () => {
    return (
        <>
            <MyFooterContainer> <MenuBar>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/">
                        Contact Us
                    </NavLink>
                </MenuBar>
                <MenuBar>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/">
                        Term of Use
                    </NavLink>
                </MenuBar>
                <MenuBar>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/">
                        Privacy Policy
                    </NavLink>
                </MenuBar></MyFooterContainer>
        </>
    );
};
