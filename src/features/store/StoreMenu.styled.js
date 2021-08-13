import styled from 'styled-components'

export const StyledStoreMenu = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.textColorStoreHeader};

    h5 {
        font-size: 1.3em;
        font-weight: 350;
        padding-left: 7px;
    }

    svg {
        font-size: 2em;
    }
    
`