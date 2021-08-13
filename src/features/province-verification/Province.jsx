import React, { useEffect, useState } from 'react'

import { useHistory } from "react-router-dom";

import { StyledProvince } from './Province.styled'

const Province = () => {

    const [region, setRegion] = useState("")
    const [isMinAge, setIsMinAge] = useState(false)
    const [spanRegionClass, setSpanRegionClass] = useState("span-region-inactive")
    const [minAge, setMinAge] = useState("")

    const history = useHistory();

    useEffect(() => {
        regionHandler(region)
    }, [region])

    const formHandler = (e) => {
        e.preventDefault()
        if (!region) {
            setSpanRegionClass("span-region-active")
        } else if (!isMinAge) {
            history.push('/denied-home')
        } else {
            setSpanRegionClass("span-region-inactive")
            history.push('/stores')

        }
    }

    const regionHandler = (region) => {
        switch (region) {
            case "ab":
                setMinAge("18")
                setSpanRegionClass("span-region-inactive")
                break;
            case "bc":
                setMinAge("19")
                setSpanRegionClass("span-region-inactive")
                break;
            case "mb":
                setMinAge("19")
                setSpanRegionClass("span-region-inactive")
                break;
            case "nb":
                setMinAge("19")
                setSpanRegionClass("span-region-inactive")
                break;
            case "nl":
                setMinAge("19")
                setSpanRegionClass("span-region-inactive")
                break;
            case "ns":
                setMinAge("19")
                setSpanRegionClass("span-region-inactive")
                break;
            case "on":
                setMinAge("19")
                setSpanRegionClass("span-region-inactive")
                break;
            case "pe":
                setMinAge("19")
                setSpanRegionClass("span-region-inactive")
                break;
            case "qc":
                setMinAge("21")
                setSpanRegionClass("span-region-inactive")
                break;
            case "sk":
                setMinAge("19")
                setSpanRegionClass("span-region-inactive")
                break;
            case "nt":
                setMinAge("19")
                setSpanRegionClass("span-region-inactive")
                break;
            case "nu":
                setMinAge("19")
                setSpanRegionClass("span-region-inactive")
                break;
            case "yk":
                setMinAge("19")
                setSpanRegionClass("span-region-inactive")
                break;
            default:
                break;
        }
    }

    const checkboxHandler = (e) => {
        setIsMinAge(!isMinAge)
    }


    return (
        <StyledProvince>
            <form onSubmit={(e) => formHandler(e)}>
                <h2>ID Please</h2>
                <label className="label-region" htmlFor="province">Select your Region</label>
                <select id="province" name="province" value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="" disabled>Province</option>
                    <option value="ab">Alberta</option>
                    <option value="bc">British Columbia</option>
                    <option value="mb">Manitoba</option>
                    <option value="nb">New Brunswick</option>
                    <option value="nl">Newfoundland and Labrador</option>
                    <option value="ns">Nova Scotia</option>
                    <option value="on">Ontario</option>
                    <option value="pe">Prince Edward Island</option>
                    <option value="qc">Quebec</option>
                    <option value="sk">Saskatchewan</option>
                    <option value="nt">Northwest Territories</option>
                    <option value="nu">Nunavut</option>
                    <option value="yk">Yukon</option>

                </select>
                <span className={spanRegionClass}>Please select your Province or Territory</span>
                <div className={region ? "checkbox-age" : "display-none"}>
                    <input className={region ? "" : "display-none"} type="checkbox" defaultValue={isMinAge} onChange={(e) => checkboxHandler(e)}></input>
                    <label className={region ? "" : "display-none"}>I confirm I'm at least {minAge} years old.</label>
                </div>
                <button className="submit-btn" type="submit">Enter</button>
            </form>

        </StyledProvince>
    )
}

export default Province