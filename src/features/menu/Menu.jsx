import React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {

    return (
        <StyledMenu aria-label="menu" open={open}>
            <a href="/">
                menu mob
            </a>
            <a href="#123">
                123
            </a>
            <a href="#456">
                456
            </a>
            <a href="#789">
                789
            </a>
        </StyledMenu>
    )
}

export default Menu;
