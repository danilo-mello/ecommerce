import React from 'react'

import { StyledStoreHeader } from './StoreHeader.styled'

import CartIcon from '../../features/cart/CartIcon'
import StoreMenu from './StoreMenu'
import StoreSearchBar from './StoreSearchBar'

const StoreHeader = (props) => {

    return (

        <StyledStoreHeader>

            <div className="store-header-title-btn-container">

                <h3 className="store-header-title">
                    {props.title ? props.title : "Airport Menu "}
                </h3>

                <a href="/stores" className="store-header-close-btn">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
                </a>

            </div>

            <div className="store-header-bar">

                <StoreMenu />

                <StoreSearchBar />

                <CartIcon total={3} />
            
            </div>

        </StyledStoreHeader>
    )
}

export default StoreHeader