import styled from 'styled-components'

export const StyledCartHeader = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    background-color: ${({ theme }) => theme.pageBackground};

    .cart-header-title-btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 100vw;
        height: 150px;
    }

    .cart-header-title {
        font-size: 2.5em;
        font-weight: 350;
    }

    .cart-header-close-btn {
        font-size: 2em;
        position: absolute;
        left: 85%;
        top: 5%;
    }

    @media only screen and (min-width: ${({ theme }) => theme.mobile}) {
        width: 90vw;
        margin-top: 80px;

        .cart-header-close-btn {
            font-size: 2em;
            position: absolute;
            left: 90%;
            top: 100px;
        }

        .cart-header-title {
            display: flex;
            align-items: center;
            justify-content: center;

        }

    }
    
`