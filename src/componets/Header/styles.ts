import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${(props) => props.theme['green-200']};
`
export const HeaderContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem 0.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 5rem;
  }

  nav {
    display: flex;
    gap: 2rem;
  }

  @media (max-width: 1100px) {
    max-width: 69rem;
  }

  @media (max-width: 800px) {
    max-width: 40rem;
  }

  @media (max-width: 540px) {
    max-width: 24rem;
  }
`
