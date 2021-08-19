import React from 'react'

import ProductList from '../../features/product/ProductList'
import StoreHeader from '../../features/store/StoreHeader'
import ProductBar from '../../features/product/ProductBar'

import { StyledProductPage } from './ProductPage.styled'

const ProductPage = (props) => {

    return (

        <StyledProductPage>

            <StoreHeader title={"Airport Menu"} />
            
            <ProductBar categorie={"Flowers"} />

            <ProductList />

        </StyledProductPage>
    )
}

export default ProductPage