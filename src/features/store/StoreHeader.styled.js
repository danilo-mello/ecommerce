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

    .store-header-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 100vw;
        height: 70px;
        padding: 0 5vw;
        border-bottom: 1px solid ${({ theme }) => theme.textColorStoreHeader};
        background-color: #E3F7F4;
    }
    
`