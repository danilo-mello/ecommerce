import React from 'react'

import { StyledStoreCard } from './StoreCard.styled'

const StoreCard = (props) => {




    return (

        <StyledStoreCard>
            <div>
                <div>
                    <div>
                        {props.store.city}
                    </div>
                    <div>
                        {props.store.name}
                    </div>
                </div>
                <div>
                    Open
                </div>
            </div>
            <div>
                {props.store.address}
            </div>
            <div>
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