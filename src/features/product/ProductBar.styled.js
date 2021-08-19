import styled from 'styled-components'

export const StyledProductBar = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    background-color: white;
    flex-direction: column;

    .product-bar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90vw;
    }

    hr {
        height: 1px;
        width: 90vw;
        color: #DCDCDC;
        background-color: #DCDCDC;
        border-width:0
    }

    .product-bar-filter {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        margin-left: 7px;
        font-size: 1em;
        font-weight: 500;
    }

    svg {
        font-size: 1.5em;

    }

    @media only screen and (min-width: ${({ theme }) => theme.mobile}) {

        width: 90vw;

        .product-bar-header {
            width: 65vw;
        }
    }

`