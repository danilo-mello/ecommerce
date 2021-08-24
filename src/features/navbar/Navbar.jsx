import React from 'react'

import { StyledNav } from './Navbar.styled'

const Navbar = () => {
    return (
        <StyledNav aria-label="navbar">
            <a href="/">
                menu 
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
        </StyledNav>
    )
}

export default Navbar