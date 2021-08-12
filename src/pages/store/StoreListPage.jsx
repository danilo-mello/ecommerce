import React, { useState } from 'react'

import Burger from '../../features/burger/Burger'
import Menu from '../../features/menu/Menu'
import Navbar from '../../features/navbar/Navbar'
import Logo from '../../features/logo/Logo'
import Footer from '../../features/footer/Footer'

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

    const showProvince = () => {
        if (province===""){
            return <></> 
        } else if (city==="") {
            return <>{province}</>
        } 
        return <>{province} | {city}</>
    }

    return (

        <StyledStoreListPage>
        
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            <Navbar />

            <Logo />

            <div className="store-page-container">

                <div className="store-page-title">
                    Find a Store
                </div>
                <div className="store-page-subtitle">
                    Filter by Province and then by city to find the stores in your area.
                </div>

                <div className="store-page-selectors">
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

                <div className="store-page-prov-city">
                    {showProvince()}
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

            <Footer />

        </StyledStoreListPage>
    )
}

export default StoreListPage