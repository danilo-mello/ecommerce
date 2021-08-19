import React from 'react'

import ProductCard from './ProductCard'
import { StyledProducList } from './ProductList.styled'

const ProductList = () => {

    const data = [
        {
            "category": "Flower",
            "products":
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
        }

    ]

    return (

        <StyledProducList>
            <div>
                {
                    data[0].products.map((product, i) => (
                        <ProductCard key={i} data={product} />
                    ))
                }
            </div>
        </StyledProducList>
    )
}

export default ProductList