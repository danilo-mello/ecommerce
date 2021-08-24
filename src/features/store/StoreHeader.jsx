import React from 'react'

import { StyledStoreHeader } from './StoreHeader.styled'

import CartIcon from '../../features/cart/CartIcon'
import StoreMenu from './StoreMenu'
import StoreSearchBar from './StoreSearchBar'

import { useHistory } from 'react-router-dom'

const StoreHeader = (props) => {

    const history = useHistory();


    return (

        <StyledStoreHeader>

            <div className="store-header-title-btn-container">

                <h3 className="store-header-title">
                    {props.title ? props.title : "Store Name"}
                </h3>

                <div onClick={() => history.goBack()} className="store-header-close-btn">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
                </div>

            </div>

            <div className="store-header-bar-mobile">

                <StoreMenu />

                <StoreSearchBar />

                <CartIcon total={3} />
            
            </div>

            <div className="store-header-bar-desktop">

                <div className="store-header-bar-desktop-items">

                    <StoreMenu />

                    <StoreSearchBar />

                    <CartIcon total={3} />

                </div>

            </div>

        </StyledStoreHeader>
    )
}

export default StoreHeader