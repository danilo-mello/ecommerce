import styled from 'styled-components'

export const StyledHome= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .home-hero {
        display: none;
    }

    @media only screen and (min-width: ${({ theme }) => theme.mobile}) {

        .home-container{
            display: flex;
            justify-content: center;
            align-items: flex-start;  
            flex-direction: row;  
            padding-top: 10vh;
        }

        .home-hero {
            padding-top: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50vw;
            
            img {
                height: auto;
                width: 35vw;
            }
            
        }


    }

`