import React from 'react'

import { StyledProductBar } from './ProductBar.styled'

const ProductBar = (props) => {

    return (

        <StyledProductBar>

            <div className="product-bar-header">
            
                <h3>All {props.categorie}</h3>
                
                <div className="product-bar-filter">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15 2v1.67l-5 4.759V14H6V8.429l-5-4.76V2h14zM7 8v5h2V8l5-4.76V3H2v.24L7 8z"></path></svg>
                    <span>Filters</span>
                </div>

            </div>
            <hr />

        </StyledProductBar>
    )
}

export default ProductBar