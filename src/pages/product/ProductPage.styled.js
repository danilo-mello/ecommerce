import styled from 'styled-components'

export const StyledProductPage = styled.div`

    background-color: ${({ theme }) => theme.categoryCardBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    @media only screen and (min-width: ${({ theme }) => theme.mobile}) {

        background-color: ${({ theme }) => theme.textColorDark};
        width: 100vw;
    }

`