import styled from 'styled-components'

export const StyledCartIcon = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .cart-icon-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${({ theme }) => theme.checkoutBtnBackground};
        color: #fff;
        padding: 7px;
        width: 60px;
        height: 35px;
        border-radius: 4px;
        font-size: 1em;
        font-weight: 480;
        padding: 0 10px;
    }

    .cart-icon-svg {
        font
        height: 20px;
        
    }

    .cart-icon-total {

    }

`