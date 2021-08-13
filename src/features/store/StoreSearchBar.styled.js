import styled from 'styled-components'

export const StyledStoreSearchBar = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 150px;

    svg {
        font-size: 1.5em;
        color: ${({ theme }) => theme.textColorStoreHeader};
    }
    
`