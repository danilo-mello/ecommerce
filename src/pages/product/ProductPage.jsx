import React from 'react'

import { useParams } from 'react-router-dom'

import ProductList from '../../features/product/ProductList'
import StoreHeader from '../../features/store/StoreHeader'
import ProductBar from '../../features/product/ProductBar'

import { StyledProductPage } from './ProductPage.styled'

const ProductPage = (props) => {

    let params = useParams()

    return (

        <StyledProductPage>

            <StoreHeader title={params.storename} />
            
            <ProductBar categorie={params.categorie} />

            <ProductList />

        </StyledProductPage>
    )
}

export default ProductPage