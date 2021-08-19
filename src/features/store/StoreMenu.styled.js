import styled from 'styled-components'

export const StyledStoreMenu = styled.div`

    .store-mobile-menu {
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
    }

    .store-desktop-menu {
        display: none;
    }

    @media only screen and (min-width: ${({ theme }) => theme.mobile}) {

        display: flex;
        justify-content: flex-start;
    
        .store-mobile-menu {
            display: none;
        }

        .store-desktop-menu-background {

            .store-desktop-menu {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 40vw;

                a {
                    color: ${({ theme }) => theme.textColorStoreHeader};
                    text-decoration: none; 
                    cursor: pointer;
                    padding-right: 25px;
                    font-size: 1.2em;
                    font-weight: 450;
                }
            }

            color: ${({ theme }) => theme.textColorStoreHeader};

            h5 {
                font-size: 1.3em;
                font-weight: 350;
                padding-left: 7px;
            }

            svg {
                font-size: 2em;
            }
            
        }
    }
    
`