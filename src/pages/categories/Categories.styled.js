import styled from 'styled-components'

export const StyledCategories = styled.div`

    background-color: ${({ theme }) => theme.categoryCardBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        margin-left: 5vw;
        font-size: 1.3em;
        font-weight: 450;
    }

    .categories-container {
        width: 90vw;
    }

    .category-cards-container {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 95vw;
        background-color: 'grey';
        flex-wrap: wrap;
    }

    .category-card {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 160px;
        height: 130px;
        background-color: ${({ theme }) => theme.categoryCardBackground};
        color: ${({ theme }) => theme.categoryCardColor};
        margin: 10px;
        border-radius: 10px;
        box-shadow: rgba(0,0,0,0.25) 0 5px 5px -1px;

        text-decoration: none;

        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: none;
        }
    }

    .category-card-promotion-popular {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        width: 160px;
        height: 200px;
        background-color: ${({ theme }) => theme.categoryCardBackground};
        color: ${({ theme }) => theme.categoryCardColor};
        margin: 10px;
        border-radius: 10px;
        box-shadow: rgba(0,0,0,0.25) 0 5px 5px -1px;

        text-decoration: none;

        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: none;
        }
    }



    .category-card-name {
        width: 160px;
        height: 30px;
        text-align: left;
        padding-left: 15px;
        font-size: 1rem;
        font-weight: 500;
    }

    .category-card-img-container {
        img {
            height: 65px;
            width: auto;
        }

    }

    @media only screen and (min-width: ${({ theme }) => theme.mobile}) {

        background-color: ${({ theme }) => theme.textColorDark};


        .category-cards-container {
            width: 65vw;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }

        .categories-container {
            background-color: ${({ theme }) => theme.categoryCardBackground};
            width: 90vw;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;

        }

        .category-card {

            width: 200px;
            height: 180px;
            margin: 15px;
            border-radius: 10px;
            box-shadow: rgba(0,0,0,0.25) 0 5px 5px -1px;
        
        }

        .category-card-promotion-popular {

            width: 200px;
            height: 220px;
            margin: 15px;
            border-radius: 10px;
            box-shadow: rgba(0,0,0,0.25) 0 5px 5px -1px;
        
        }

        .category-card-price {
            font-size: 1.1rem;
            font-weight: 400;
        }

        .category-card-name {
            width: 200px;
            height: 50px;
            text-align: left;
            padding-left: 25px;
            font-size: 1.3rem;
            font-weight: 500;
        }

        .category-card-img-container {
            img {
                height: 85px;
                width: auto;
            }

        }

        .categories-title {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 65vw;
            h2 {
                padding: 40px 0 20px 20px;
                margin: 0;
                font-size: 1.8em;
                font-weight: 450;
            }
        }

    }
`;
