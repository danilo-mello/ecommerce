import React from 'react'

import { StyledCartHeader } from './CartHeader.styled'

const CartHeader = (props) => {

    return (

        <StyledCartHeader>

            <div className="cart-header-title-btn-container">

                <h3 className="cart-header-title">
                    {props.title ? props.title : "Airport Menu "}
                </h3>

                <a href="/stores" className="cart-header-close-btn">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
                </a>

            </div>


        </StyledCartHeader>
    )
}

export default CartHeader