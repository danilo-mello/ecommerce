import React, { useState } from 'react'

import Burger from '../../features/burger/Burger'
import Menu from '../../features/menu/Menu'
import Navbar from '../../features/navbar/Navbar'
import ProductList from '../../features/product/ProductList'

import { StyledProductPage } from './ProductPage.styled'

const ProductPage = (props) => {

    const [open, setOpen] = useState(false)

    return (

        <StyledProductPage>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            <Navbar />

            <ProductList />

        </StyledProductPage>
    )
}

export default ProductPage