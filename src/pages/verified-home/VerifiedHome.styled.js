import styled from 'styled-components'

export const StyledVerifiedHome = styled.div`

    background-color: ${({ theme }) => theme.categoryCardBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .categories-container {
        margin-top: 150px;
    }

    h2 {
        margin-left: 10vw;
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
        box-shadow: 0 6px 6px -5px;
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
