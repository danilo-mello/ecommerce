import React from 'react'

import { Link } from 'react-router-dom'


import { StyledStoreCard } from './StoreCard.styled'

const StoreCard = (props) => {




    return (

        <StyledStoreCard>
            <div className="store-card-info-container">

                <div className="store-card-img-container">
                    <img src={props.store.img} alt={props.store.name} />
                </div>

                <div className="store-card-open-close-btn">
                    OPEN
                </div>

            </div>

            <div className="store-card-info2-container">

                <div className="store-card-city-name-container">

                        <div className="store-card-city">
                            {props.store.city}
                        </div>

                        <div className="store-card-name">
                            {props.store.name}
                        </div>

                </div>

                <div className="store-card-city-address-bsnh">

                    <div className="store-card-address">
                        {props.store.address}
                    </div>

                    <div className="store-card-bsns-hrs">
                        {props.store.businessHours}
                    </div>

                </div>

                <div className="store-card-btn-container">

                    <Link  className="store-card-btn" to={{pathname:`/stores/${props.store.name}/categories/`,}}>
                        Pick-up
                    </Link>

                    <Link  className="store-card-btn" to={{pathname:`/stores/${props.store.name}/categories/`,}}>
                        Delivery
                    </Link>

                </div>
                
            </div>

        </StyledStoreCard>
    )
}

export default StoreCard