import styled from 'styled-components'

export const StyledProvince = styled.div`

    margin-top: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    form {
        display: flex;
        align-items: left;
        justify-content: center;
        flex-direction: column;
    }

    select {
        height: 8vh;
        width: 85vw;
        // color: ${({ theme }) => theme.textColorLightGrey};
        padding-left: 3.5vw;
        font-size: 1rem;
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
    }

    label {
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
    }

    .span-region-active {
        display: flex;
        color: ${({ theme }) => theme.textColorRedAlert};
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
    }

    .span-region-inactive {
        display: none;
    }

    .span-age-active {
        display: flex;
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
    }

    .span-age-inactive {
        display: none;
    }

    .display-none {
        display: none;
    }

    .submit-btn {
        height: 8vh;
        width: 85vw;
        background-color: ${({ theme }) => theme.buttonBackground};
        color: ${({ theme }) => theme.buttonTextColor};
        border: none;
        font-size: 1.2rem;
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
    }

    h2 {
        align-self: fkex-start;
    }
    .checkbox-age {
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
    }

`;
