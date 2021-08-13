import styled from 'styled-components'

export const StyledCategories = styled.div`

    background-color: ${({ theme }) => theme.categoryCardBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .categories-container {
    }

    h2 {
        margin-left: 5vw;
        font-size: 1.3em;
        font-weight: 450;
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

`;
