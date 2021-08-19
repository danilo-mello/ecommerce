import styled from 'styled-components'

export const StyledStoreHeader = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    background-color: ${({ theme }) => theme.pageBackground};

    .store-header-title-btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 100vw;
        height: 150px;
    }

    .store-header-title {
        font-size: 2.5em;
        font-weight: 350;
        max-width: 60vw;
    }

    .store-header-close-btn {
        font-size: 2em;
        position: absolute;
        left: 85%;
        top: 5%;
    }

    .store-header-bar-mobile {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 100vw;
        height: 70px;
        padding: 0 5vw;
        border-bottom: 1px solid #DCDCDC;
        background-color: #E3F7F4;
    }

    .store-header-bar-desktop {
        display: none;
    }

    @media only screen and (min-width: ${({ theme }) => theme.mobile}) {

        width: 90vw;
        margin-top: 80px;

        .store-header-bar-mobile {
            display: none;
        }

        .store-header-bar-desktop {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90vw;
            height: 70px;
            padding: 0 5vw;
            background-color: #E3F7F4;

        }

        .store-header-bar-desktop-items {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
            width: 65vw;
            height: 70px;
            padding: 0 5vw;

        }


        .store-header-title-btn-container {
            width: 90vw;
        }

        .store-header-close-btn {
            font-size: 2em;
            position: absolute;
            left: 90%;
            top: 100px;
        }

        .store-header-bar-items {
            width: 65vw;
            display: flex;
        }
    }
    
`