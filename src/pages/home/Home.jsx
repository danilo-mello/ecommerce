import React from 'react'

import Province from '../../features/province-verification/Province'
import Logo from '../../features/logo/Logo'

import { StyledHome } from './Home.styled'


const Home = () => {

    return (
        <StyledHome>
            <Logo />
            <div className="home-container">

                <div className="home-hero">
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" alt="hero" />
                </div>

                <Province />
            </div>

        </StyledHome>
    )
}

export default Home