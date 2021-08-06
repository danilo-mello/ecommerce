import styled from 'styled-components'

export const StyledNav = styled.nav`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }

  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${({ theme }) => theme.navBackground};
  height: 15vh;
  width: 100vw;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

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
      transition: transform 0.3s ease-in-out
      }
  }

`;