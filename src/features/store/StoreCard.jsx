import React from 'react'

import { StyledStoreCard } from './StoreCard.styled'

const StoreCard = (props) => {




    return (

        <StyledStoreCard>
            <div className="store-card-info-container">

                <div className="store-card-city-name-container">

                    <div className="store-card-city">
                        {props.store.city}
                    </div>

                    <div className="store-card-name">
                        {props.store.name}
                    </div>

                </div>

                <div className="store-card-open-close-btn">
                    OPEN
                </div>

            </div>
            <div className="store-card-address">
                {props.store.address}
            </div>
            <div className="store-card-bsns-hrs">
                {props.store.businessHours}
            </div>

            <div className="store-card-btn-container">
                <div className="store-card-btn"> 
                    Pick-up
                </div>

                <div className="store-card-btn"> 
                    Delivery
                </div>

            </div>

        </StyledStoreCard>
    )
}

export default StoreCard