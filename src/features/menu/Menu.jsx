import React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {

    return (
        <StyledMenu aria-label="menu" open={open}>
            <a href="/">
                home
            </a>
            <a href="/">
                stores
            </a>
            <a href="/">
                products
            </a>
            <a href="/">
                help
            </a>
        </StyledMenu>
    )
}

export default Menu;
