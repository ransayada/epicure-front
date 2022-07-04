import React from 'react';
import { MenuContainer,MyXContainer,MyMenuContainer,MenuBar,MenuBarContainer } from './Menu.style';
import { NavLink } from 'react-router-dom';



export const Menu: React.FC = () => {
    return (
        <>
            <MenuContainer>
                <MyXContainer></MyXContainer>
                <MyMenuContainer>
                    <MenuBar><NavLink style={{ textDecoration:'none',color:'black'}} to='/restaurants'>Restaurants</NavLink></MenuBar>
                    <MenuBar><NavLink style={{ textDecoration:'none',color:'black'}} to='/chefs'>Chefs</NavLink></MenuBar>
                    <MenuBarContainer>
                        <MenuBar><NavLink style={{ textDecoration:'none',color:'black'}} to='/'>Contact Us</NavLink></MenuBar>
                        <MenuBar><NavLink style={{ textDecoration:'none',color:'black'}} to='/'>Term of Use</NavLink></MenuBar>
                        <MenuBar><NavLink style={{ textDecoration:'none',color:'black'}} to='/'>Privacy Policy</NavLink></MenuBar>
                    </MenuBarContainer>
                </MyMenuContainer>

            </MenuContainer>
        </>
    );
};
