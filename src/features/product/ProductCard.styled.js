import styled from 'styled-components'

export const StyledProducCard = styled.div`

    background: ${({ theme }) => theme.productCardBackground};
    color: ${({ theme }) => theme.productCardColor};
    width: 100vw;
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .product-card {
        display: flex;
        width: 100vw;
        padding: 0 5vw 0 5vw;
    }

    .product-card-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 65vw;
        height: 120px;
    }

    .product-name {
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 0.5px;
        padding-bottom: 6px;
    }

    .product-manufacturer {
        font-size: 0.9rem;
        font-weight: 300;
        padding-bottom: 6px;
    }

    .product-info {
        font-size: 0.9rem;
        font-weight: 400;
        color: #989898;
    }

    .product-img-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
    }

    .product-sizes-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100vw;
        height: 110px;
        padding: 0 5vw 0 5vw;

    }

    .product-size-card {
        background: #DCDCDC;
        height: 70px;
        width: 90px;
        border-radius: 10px;
        margin-right: 15px;
    }

    .product-size-card:hover {
        background: #C1C1C1;
        .add-to-cart-btn {
            color: #2D55A9;
    
        }
    }

    .product-weight {
        text-align: center;
        font-weight: 400;
        font-size: 0.85rem;
    }

    .product-price {
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
    }

    .add-to-cart-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        position: relative;
        left: 77%;
        border: 1px solid #989898;
        color: #989898;
        font-size: 1.25rem;
        font-weight: 350;
    }

    hr {
        height: 1px;
        width: 90vw;
        color: #DCDCDC;
        background-color: #DCDCDC;
        border-width:0
    }

`