import React from 'react'

import { StyledNav } from './Navbar.styled'

const Navbar = () => {
    return (
        <StyledNav aria-label="navbar">
            <a href="/">
                menu desk
            </a>
            <a href="/stores">
                stores
            </a>
            <a href="/products">
                products
            </a>
            <a href="/help">
                help
            </a>
        </StyledNav>
    )
}

export default Navbar