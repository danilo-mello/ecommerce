import styled from 'styled-components'

export const StyledProvince = styled.div`

    margin-top: 150px;
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
        align-self: flex-start;
    }
    .checkbox-age {
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
    }
    
    @media only screen and (min-width: ${({ theme }) => theme.mobile}) {

        width: 50vw;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;  

        form {
            display: flex;
            justify-content: flex-start;
            aligm-items: flex-start;
        }

        select {
            height: 50px;
            width: 28vw;
            padding-left: 20px;
            font-size: 1.1rem;
            margin-top: 2.5vh;
            margin-bottom: 2.5vh;
        }

        .submit-btn {
            height: 50px;
            width: 28vw;
        }

        h2 {
            font-size: 3em;
            font-weight: 400;
            margin-top: 0;
        }

        .label-region {
            font-size: 1.2em;
        }

        label {
            font-size: 1.1em;
        }
    }
`;
