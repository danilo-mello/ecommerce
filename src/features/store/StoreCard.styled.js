import styled from 'styled-components'

export const StyledStoreCard = styled.div`

    border-bottom: 1px solid #000;
    padding: 30px 0;


    .store-card-btn-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 90vw;
    }

    .store-card-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #152101;
        color: #fff;
        height: 50px;
        width: 175px;
        font-size: 1.1em;
        font-weight: 400;
    }

    .store-card-info-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .store-card-city-name-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 60vw;
    }

    .store-card-city {
        font-size: 1em;
        font-weight: 400;
        align-self: flex-start;
    }

    .store-card-name {
        font-size: 3em;
        font-weight: 350;
        align-self: flex-start;
    }

    .store-card-open-close-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #1D2E02;
        color: white;
        width: 70px;
        height: 35px;
        font-size: 0.8em;
        font-weight: 450;
    }

    .store-card-address {
        font-size: 1em;
        font-weight: 350;
        padding: 10px 0;
    }

    .store-card-bsns-hrs {
        font-size: 1em;
        font-weight: 350;
        padding: 10px 0 20px 0;
    }

`