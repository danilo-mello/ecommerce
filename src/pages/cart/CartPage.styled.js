import styled from 'styled-components'

export const StyledCartPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;

    .cart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 100vw;
        height: 70px;
        background-color: white;
        padding: 0 20px;
        font-size: 1em;
        font-weight: 450;
    }

    .cart-close-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${({ theme }) => theme.checkoutBtnBackground};
        border: 2px solid ${({ theme }) => theme.checkoutBtnBackground};
        padding: 7px;
        width: 80px;
        height: 35px;
        border-radius: 8px;
        font-size: 0.9em;
        font-weight: 480;
        padding: 0 10px;
    }


    .cart-checkout-button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.checkoutBtnBackground};
        color: ${({ theme }) => theme.checkoutBtnColor};
        height: 46px;
        width: 85vw;
        border-radius: 23px;
        font-size: 0.82em;
        font-weight: 700;
        margin: 20px 0; 
    }

    .cart-item-img-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 100px;
        img {
            width: 60px;
            height: 60px;
        }

    }

    .cart-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90vw;
        height: 100px;
        background-color: white;
        border-bottom: 1px solid #DCDCDC;

    }

    .cart-item:last-of-type {
        border-bottom: none;
    }

    .cart-item-weight-and-close-btn-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }

    .cart-item-name {
        font-size: 0.9em;
        font-weight: 450;
    }

    .cart-item-info {
        display: flex;
        align-items: left;
        justify-content: center;
        flex-direction: column;
        width: 150px;
        height: 100px;
        padding: 10px 0;
    }

    .cart-remove-item {
        color: ${({ theme }) => theme.removeItemColor};
        font-size: 0.75em;
        font-weight: 350;
        padding-right: 25px;
    }

    .cart-item-weigth {
        font-size: 0.8em;
        font-weight: 350;
        border-right: 1px solid #DCDCDC;
        padding-right: 25px;
    }

    .cart-item-price {
        padding-right: 10px;
    }

    .cart-item-manufacturer {
        padding: 10px 0;
        font-size: 0.8em;
        font-weight: 350;
        color: ${({ theme }) => theme.removeItemColor};
    }

    hr {
        height: 1px;
        width: 100vw;
        color: #DCDCDC;
        background-color: #DCDCDC;
        border-width:0
    }

    .cart-item-quantity-selector {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        border-radius: 15px;
        background-color: white;
        height: 30px;
        width: 50px;
        border-color: #DCDCDC;
    }

    @media only screen and (min-width: ${({ theme }) => theme.mobile}) {

        background-color: ${({ theme }) => theme.textColorDark};
        width: 100vw;
        height: 100vh;

        .cart-items-container {
            width: 90vw;
        }

        .cart-checkout-button {
            width: 350px;
        }

        .cart-header {
            width: 90vw;
            border-bottom: 1px solid #DCDCDC;
        }

        .cart-page-header-title {
            padding-left: 15vw;
        }
        .cart-close-button {
            margin-right: 15vw;
        }

        .cart-checkout-button-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 90vw;
            background-color: white;
            border-bottom: 1px solid #DCDCDC;
        }

        .cart-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 800px;
        }

        .cart-items-container {
            width: 90vw;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

`
