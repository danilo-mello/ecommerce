import React from 'react'

import { Link, useParams } from 'react-router-dom'

import StoreHeader from '../../features/store/StoreHeader'
import data from '../../app/data.json'
import { StyledCategories} from './Categories.styled'

const Categories = (props) => {

    let params = useParams()

    return (

        <StyledCategories>

            <StoreHeader title={params.storename} />

            <div className="categories-container">
                <div className="categories-title">
                <h2>Categories</h2>
                </div>

                <div className="category-cards-container">
                    {data && data.categories.map((categorie, id) =>
                        <Link key={id} className="category-card" params={{name: categorie.name}} to={{pathname:`/${params.storename}/${categorie.name}`,}}>
                            <div className="category-card-name">{categorie.name}</div>
                            <div className="category-card-img-container"><img src={categorie.img} alt={categorie.name} /></div>
                        </Link>

                    )}
                </div>

            </div>

            <div className="categories-container">
                <div className="categories-title">
                <h2>Promotions</h2>
                </div>

                <div className="category-cards-container">
                    {data && data.promotionProducts.map(product =>
                        <div className="category-card-promotion-popular">
                            <div className="category-card-name">{product.name}</div>
                            <div className="category-card-img-container"><img src={product.img} alt={product.name} /></div>
                            <div className="category-card-price">${product.price}</div>
                        </div>

                    )}
                </div>

            </div>

            <div className="categories-container">
                <div className="categories-title">
                <h2>Popular</h2>
                </div>

                <div className="category-cards-container">
                    {data && data.popularProducts.map(product =>
                        <div className="category-card-promotion-popular">
                            <div className="category-card-name">{product.name}</div>
                            <div className="category-card-img-container"><img src={product.img} alt={product.name} /></div>
                            <div className="category-card-price">${product.price}</div>
                        </div>

                    )}
                </div>

            </div>

        </StyledCategories>
    )
}

export default Categories