import React from 'react';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen }) => {

    return (
        <StyledBurger aria-label="hamburguer button" open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

export default Burger;
