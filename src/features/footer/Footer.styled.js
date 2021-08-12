import styled from 'styled-components'

export const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90vw;

    .footer-social-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        padding: 25px 0;
    }

    .footer-social-icon {
        padding: 0 15px;

        svg { 
            height: 30px;
            width: 30px;
        }
    }

    .footer-links {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin-bottom: 25px;
    }

    .footer-link-col {
        width: 45vw;
        align-self: flex-start;
        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        li {
            padding: 5px 0;
            font-size: 1rem;
            font-weight: 400;
        }
    }

    .footer-copyright {
        font-size: 0.9rem;
        font-weight: 400;
        align-self: flex-start;
        padding-bottom: 25px;
    }
`