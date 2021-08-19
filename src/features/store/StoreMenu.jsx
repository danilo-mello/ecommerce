import React from 'react'

import { StyledStoreMenu } from './StoreMenu.styled'

const StoreMenu = () => {

    return (

        <StyledStoreMenu>

            <div className="store-mobile-menu">
                <div>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </div>

                <h5> Menu </h5>
            </div>

            <div className="store-desktop-menu-background">

                <div className="store-desktop-menu">

                    <a href={'./#'}> Home </a>
                    <a href={'./#'}> Stores </a>
                    <a href={'./#'}> Menu </a>

                </div>

            </div>

        </StyledStoreMenu>
    )
}

export default StoreMenu