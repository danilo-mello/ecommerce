import React, { useState } from 'react'

import Burger from '../../features/burger/Burger'
import Menu from '../../features/menu/Menu'
import Navbar from '../../features/navbar/Navbar'

import StoreCard from '../../features/store/StoreCard'

import { StyledStoreListPage } from './StoreListPage.styled'

const StoreListPage = (props) => {

    const [open, setOpen] = useState(false)
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')

    const formHandler = (e) => {
        console.log(e)
    }

    const stores = [
        {
            "name": "Airport",
            "city": "Vancouver",
            "address": "8425 Granville Street Vancouver, BC, V6P 4Z9",
            "businessHours": "Open daily 9am to 11pm"
        },
                {
            "name": "Main Street",
            "city": "Vancouver",
            "address": "4296 Main Street Vancouver, BC, V5V 3P9",
            "businessHours": "Open daily 9am to 11pm"
        }
    ]
    return (

        <StyledStoreListPage>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            <Navbar />

            <div>

                <div>
                    Find a Store
                </div>
                <div>
                    Filter by Province and then by city to find the stores in your area.
                </div>

                <div>
                    <form onSubmit={(e) => formHandler(e)}>
                        <select id="province" name="province" value={province} onChange={(e) => setProvince(e.target.value)}>
                            <option value="" disabled>Province</option>
                            <option value="Alberta">Alberta</option>
                            <option value="British Columbia">British Columbia</option>
                            <option value="Ontario">Ontario</option>
            
                        </select>

                        <select id="province" name="province" value={city} onChange={(e) => setCity(e.target.value)}>
                            <option value="" disabled>City</option>
                            <option value="Vancouver">Vancouver</option>
                            <option value="Kelowna">Kelowna</option>
                        </select>

                    </form>

                </div>

                <div>
                    {province} | {city}
                </div>

                <div>
                    {stores.map((store, i) => {
                        return(
                            <StoreCard
                                key={i}
                                store={store}
                             />
                        )

                    })}
                </div>

            </div>


        </StyledStoreListPage>
    )
}

export default StoreListPage