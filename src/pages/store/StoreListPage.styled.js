import styled from 'styled-components'

export const StyledStoreListPage = styled.div`
    margin-top: 150px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.pageBackground};
    padding: 0 5vw;

    .store-page-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

    .store-page-title {
        align-self: flex-start;
        font-size: 2em;
        font-weight: 350;
        padding: 15px 0;
    }

    .store-page-subtitle {
        align-self: flex-start;
        font-size: 1.1em;
        font-weight: 350;
        padding: 10px 0;
    }

    .store-page-selectors {

        form {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        select {
            height: 45px;
            width: 90vw;
            margin: 10px 0;
            font-size: 1em;
        }
    }

    .store-page-prov-city {
        font-size: 1.3em;
        font-weight: 350;
        padding: 30px 0 15px 0;
    }

    @media only screen and (min-width: ${({ theme }) => theme.mobile}) {

        .store-page-title{
            font-size: 3.5em;
            font-weight: 400;
        }
        .store-page-selector-container{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            width: 90vw;

        }

        .store-page-subtitle {
            width: 30vw;
            height: 120px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 1.2em;
            font-weight: 400;
        }

        .store-page-selectors {

            height: 120px;

            select {
                height: 55px;
                width: 250px;
                margin-right: 20px;
                padding-left: 15px;
                font-size: 1.2em;
                font-weight: 450;
            }

            form {
                height: 120px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
            }

        }

        .store-page-prov-city {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 90vw;
            font-size: 1.5em;
            font-weight: 300;
        }

        .store-page-cards-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90vw;
            flex-wrap: wrap;
        }
    }

`