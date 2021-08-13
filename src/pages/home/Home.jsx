import React from 'react'

import Province from '../../features/province-verification/Province'
import Logo from '../../features/logo/Logo'

import { StyledHome } from './Home.styled'


const Home = () => {

    return (
        <StyledHome>
            <Logo />
            <Province />
        </StyledHome>
    )
}

export default Home