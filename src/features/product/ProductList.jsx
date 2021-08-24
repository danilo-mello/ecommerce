import React from 'react'
import { useParams } from 'react-router-dom'

import ProductCard from './ProductCard'
import { StyledProducList } from './ProductList.styled'

import data from '../../app/data.json'

const ProductList = () => {

    let params = useParams()

    return (

        <StyledProducList>
            <div>
                {
                    data.products.filter((product) => product.category === params.categorie).map((product, i) => (
                        <ProductCard key={i} data={product} />
                    ))
                }
            </div>
        </StyledProducList>
    )
}

export default ProductList