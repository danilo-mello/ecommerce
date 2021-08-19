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
        width: 150px;
        font-size: 1.1em;
        font-weight: 400;
    }

    .store-card-info-container {
        display: flex;
        justify-content: flex-end;
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

    .store-card-img-container {
        display: none;
    }

    @media only screen and (min-width: ${({ theme }) => theme.mobile}) {

        width: 550px;
        margin-bottom: 30px;
        border-bottom: 0;

        .store-card-btn-container {
            width: 150px;;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            a:link {
                text-decoration: none;
            }
        }

        .store-card-bsns-hrs {
            width: 200px;
        }

        .store-card-btn {
            margin-bottom: 15px;
        }

        
        .store-card-city-name-container {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            width: 200px;
        }

        .store-card-img-container {
            img {
                width: 550px;
                height: 250px;
            }
            display: block;
        }

        .store-card-info-container {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
        }

        .store-card-open-close-btn {
            position: absolute;
            
        }

        .store-card-city-address-bsnh {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            width: 200px;

        }

        .store-card-info2-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            width: 550px;
            margin-top: 25px;
        }

        .store-card-city {
            font-size: 1em;
            font-weight: 400;
            align-self: flex-start;
            width: 180px;

        }

        .store-card-name {
            font-size: 2em;
            font-weight: 350;
            align-self: flex-start;
            width: 180px;
        }

    }

`