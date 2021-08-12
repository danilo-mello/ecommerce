import React, { useState } from 'react'

import Burger from '../../features/burger/Burger'
import Menu from '../../features/menu/Menu'
import Navbar from '../../features/navbar/Navbar'
import Footer from '../../features/footer/Footer'
import CartIcon from '../../features/cart/CartIcon'

import { StyledVerifiedHome } from './VerifiedHome.styled'

const VerifiedHome = () => {

    const [open, setOpen] = useState(false)
    const data = [
        {
            "name": "Flower",
            "img": "https://images.dutchie.com/category-stock-photos/flower/flower-1.png?auto=format&ixlib=react-9.0.2&w=1678"
        },
        {
            "name": "Pre-Rolls",
            "img": "https://images.dutchie.com/category-stock-photos/pre-rolls/pre-rolls-1.png?auto=format&ixlib=react-9.0.2&w=1678"
        },
        {
            "name": "Vaporizers",
            "img": "https://images.dutchie.com/category-stock-photos/vaporizers/vaporizers-1.png?auto=format&ixlib=react-9.0.2&w=1678"
        },
        {
            "name": "Concentrates",
            "img": "https://images.dutchie.com/category-stock-photos/concentrates/concentrates-1.png?auto=format&ixlib=react-9.0.2&w=1678"
        },
        {
            "name": "Edibles",
            "img": "https://images.dutchie.com/category-stock-photos/edibles/edibles-1.png?auto=format&ixlib=react-9.0.2&w=1678"
        },
        {
            "name": "Topicals",
            "img": "https://images.dutchie.com/category-stock-photos/topicals/topicals-1.png?auto=format&ixlib=react-9.0.2&w=1678"
        },
        {
            "name": "Accessories",
            "img": "https://images.dutchie.com/category-stock-photos/accessories/accessories.png?auto=format&ixlib=react-9.0.2&w=1678"
        },
        {
            "name": "Apparel",
            "img": "https://images.dutchie.com/category-stock-photos/apparel/apparel.png?auto=format&ixlib=react-9.0.2&w=1678"
        }
    ]

    return (

        <StyledVerifiedHome>

            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            <Navbar />

            <CartIcon total={3} />

            <div className="categories-container">
                <h2>Categories</h2>
                <div className="category-cards-container">
                    {data && data.map(categorie =>
                        <div className="category-card">
                            <div className="category-card-name">{categorie.name}</div>
                            <div className="category-card-img-container"><img src={categorie.img} alt={categorie.name} /></div>
                        </div>

                    )}
                </div>

            </div>

            <Footer />

        </StyledVerifiedHome>
    )
}

export default VerifiedHome