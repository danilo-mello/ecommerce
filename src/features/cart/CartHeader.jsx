import React from 'react'

import { StyledCartHeader } from './CartHeader.styled'

import { useHistory } from 'react-router-dom'

const CartHeader = (props) => {

    const history = useHistory()

    return (

        <StyledCartHeader>

            <div className="cart-header-title-btn-container">

                <h3 className="cart-header-title">
                    {props.title ? props.title : "Airport Menu "}
                </h3>

                <div onClick={() => history.goBack()} className="cart-header-close-btn">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
                </div>

            </div>


        </StyledCartHeader>
    )
}

export default CartHeader