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

`