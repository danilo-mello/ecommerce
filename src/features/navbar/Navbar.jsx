import React from 'react'

import { StyledNav } from './Navbar.styled'

const Navbar = () => {
    return (
        <StyledNav aria-label="navbar">
            <a href="/">
                menu desk
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
        </StyledNav>
    )
}

export default Navbar