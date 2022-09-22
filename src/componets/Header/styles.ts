import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['base-header']};
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
`
