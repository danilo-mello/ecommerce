import React, { useState, useEffect } from 'react'

import Burger from '../../features/burger/Burger'
import Menu from '../../features/menu/Menu'
import Navbar from '../../features/navbar/Navbar'
import Logo from '../../features/logo/Logo'
import Footer from '../../features/footer/Footer'
import { stores } from '../../app/data'

import StoreCard from '../../features/store/StoreCard'

import { StyledStoreListPage } from './StoreListPage.styled'

const StoreListPage = (props) => {

    const [open, setOpen] = useState(false)
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')
    const [selectedCities, setSelectedCities] = useState([])
    const [currentStores, setCurrentStores] = useState([])

    const formHandler = (e) => {
        console.log(e)
    }

    useEffect(() => {
        setCurrentStores(stores)
    }, [])

    const showProvince = () => {
        if (province===""){
            return <></> 
        } else if (city==="") {
            return <>{province}</>
        } 
        return <>{province} | {city}</>
    }

    const provinceSelectorHandle = (e) => {
        setProvince(e.target.value)
        provinceFilter(e.target.value)
    }

    const citySelectorHandle = (e) => {
        setCity(e.target.value)
        cityFilter(e.target.value)
    }

    const provinceFilter = (province) => {

        let filterStore = []

        for (let i = 0; i < stores.length; i++) {

            if (stores[i].province === province) {
                filterStore.push(stores[i])
            }
        }
        citySelectorByProvince(province)
        setCurrentStores(filterStore)
    }

    const cityFilter = (city) => {

        let filterStore = []

        for (let i = 0; i < stores.length; i++) {
            if (stores[i].city === city) {
                filterStore.push(stores[i])
            }
        }

        setCurrentStores(filterStore)
    }

    const citySelectorByProvince = (province) => {

        let cities = []

        for (let i = 0; i < stores.length; i++) {
            if (stores[i].province === province) {
                cities.push(stores[i].city)
            }
        }

        setSelectedCities([...new Set(cities)])
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

                <div className="store-page-selector-container">

                    <div className="store-page-subtitle">
                        Filter by Province and then by city to find the stores in your area.
                    </div>

                    <div className="store-page-selectors">
                        <form onSubmit={(e) => formHandler(e)}>
                            <select id="province" name="province" value={province} onChange={(e) => provinceSelectorHandle(e)}>
                                <option value="" disabled>Province</option>
                                <option value="Alberta">Alberta</option>
                                <option value="British Columbia">British Columbia</option>
                                <option value="Ontario">Ontario</option>
                
                            </select>

                            <select id="province" name="province" value={city} onChange={(e) => citySelectorHandle(e)}>
                                <option value="" disabled>City</option>

                            {
                                selectedCities && selectedCities.map((city) => {
                                        return (
                                            <option value={city}>{city}</option>
                                        )
                                })
        
                            }

                            </select>



                        </form>

                    </div>

                </div>


                <div className="store-page-prov-city">
                    {showProvince()}
                </div>

                <div className="store-page-cards-container" >
                    {currentStores.map((store, i) => {
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