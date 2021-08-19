import styled from 'styled-components'

export const StyledProducList = styled.div`

    background: #ffffff;

    @media only screen and (min-width: ${({ theme }) => theme.mobile}) {

        width: 90vw;
        display: flex;
        justify-content: center;
        align-items: center;

    }

`