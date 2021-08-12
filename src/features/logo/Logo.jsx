import React from 'react'

import { StyledLogo } from './Logo.styled'

import logo from '../static/e-Commerce.png'

const Logo = () => {
    return(
        <StyledLogo> 
            <img src={logo} alt="logo" width="150px" />
        </StyledLogo>
    )
}

export default Logo
