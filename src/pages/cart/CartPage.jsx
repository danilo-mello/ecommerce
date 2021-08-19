import React from 'react'

import { StyledCartPage } from './CartPage.styled'

import CartHeader from '../../features/cart/CartHeader'

const CartPage = () => {

    const CartItems =
        [
            {
                "name": "Wappa da Mozi",
                "manufacturer": "Redecan",
                "type": "Hybrid",
                "thc": "18% - 26%",
                "cdb": "1%",
                "img": "https://images.dutchie.com/85e1e75469ceb43d13b5cd52d425a605?auto=format&fit=fill&fill=solid&fillColor=%23fff&__typename=ImgixSettings&ixlib=react-9.0.2&h=100&w=100&q=75&dpr=1",
                "sizes": [
                    {
                        "weight": "3.5g",
                        "price": "29.02"
                    },
                    {
                        "weight": "7g",
                        "price": "55.81"
                    },
                    {
                        "weight": "15g",
                        "price": "108.71"
                    }
                ]
            },
            {
                "name": "Cold Creek Kush",
                "manufacturer": "Redecan",
                "type": "Hybrid",
                "thc": "15% - 23%",
                "cdb": "1%",
                "img": "https://images.dutchie.com/25ad1cbd2a7639f8e2e6b36f2e428327?auto=format&fit=fill&fill=solid&fillColor=%23fff&__typename=ImgixSettings&ixlib=react-9.0.2&h=100&w=100&q=75&dpr=1",
                "sizes": [
                    {
                        "weight": "3.5g",
                        "price": "29.91"
                    },
                    {
                        "weight": "7g",
                        "price": "58.04"
                    }
                ]
            },
            {
                "name": "BC Sungrow Serratus",
                "manufacturer": "Tatalus Labs",
                "type": "Hybrid",
                "thc": "13% - 21%",
                "cdb": "1%",
                "img": "https://images.dutchie.com/6b31c989c61cbdf0c44b0b18e5a000b7?auto=format&fit=fill&fill=solid&fillColor=%23fff&__typename=ImgixSettings&ixlib=react-9.0.2&h=100&w=100&q=75&dpr=1",
                "sizes": [
                    {
                        "weight": "3.5g",
                        "price": "47.55"
                    }
                ]
            }
        ]


    return(

        <StyledCartPage>

            <CartHeader />

            

            <div className="cart-header">
                <div className="cart-page-header-title">
                    Shopping Cart
                </div>
                <div className="cart-close-button">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="1px" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"></path></svg> <span>Close</span>          
                </div>
            </div>
        
            <div className="cart-checkout-button-container">
                <div className="cart-checkout-button">
                    PROCEED TO CHECKOUT - total
                </div>
            </div>


            <div className="cart-items-container">

                {
                    CartItems.map((item) => (
                        
                        <div className="cart-item">

                            <div className="cart-item-img-container">
                                <img src={item.img} alt={item.name} />
                            </div>

                            <div className="cart-item-info">
                                <div className="cart-item-name">
                                    {item.name}
                                </div>
                                <div className="cart-item-manufacturer">
                                    {item.manufacturer}
                                </div>
                                <div className="cart-item-weight-and-close-btn-container">
                                    <div className="cart-item-weigth">
                                        {item.sizes[0].weight}
                                    </div>
                                    <div className="cart-remove-item">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 16h10l1-11h-12zM10 2v-2h-4v2h-5v3l1-1h12l1 1v-3h-5zM9 2h-2v-1h2v1z"></path></svg> Remove
                                    </div>
                                </div>
                            </div>

                            <div>
                                <select className="cart-item-quantity-selector" name="quantity" id="quantity">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>

                            <div className="cart-item-price">
                                ${item.sizes[0].price}
                            </div>
                        
                        </div>

                    ))
                }

            </div>

        </StyledCartPage>
    )
}

export default CartPage
