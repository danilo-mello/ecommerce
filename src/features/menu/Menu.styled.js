import styled from 'styled-components';

export const StyledMenu = styled.nav`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.menuBackground};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    width: 100vw;

    a {
        font-size: 1.5rem;
        text-align: center;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.textColorDark};
        text-decoration: none;
        transition: color 0.3s linear;

        &:hover {
        color: ${({ theme }) => theme.black};
        transform: scale(1.05); 
        transition: transform 0.3s ease-in-out
        }
    }
  }

  display: none;
`;
