import React from 'react'

import { StyledProducCard } from './ProductCard.styled'

const ProductCard = (props) => {


    return (

        <StyledProducCard>

            <div className="product-card">
                <div className="product-card-info">
                    <div className="product-name"> {props.data.name} </div>
                    <div className="product-manufacturer"> {props.data.manufacturer} </div>
                    <div className="product-info"> {props.data.type} THC {props.data.thc} | CBD {props.data.cdb} </div>
                </div>
                <div className="product-img-container">
                    <img src={props.data.img} alt={props.data.name} />
                </div>
            </div>

            <div className="product-sizes-container">
                {
                    props.data.sizes.map((size, i) => (
                        <div key={i} className="product-size-card">
                            <div className="add-to-cart-btn">+</div>
                            <div className="product-weight">{size.weight}</div>
                            <div className="product-price">${size.price}</div>
                        </div>
                    ))
                }
            </div>
            <hr />

        </StyledProducCard>
    )
}

export default ProductCard