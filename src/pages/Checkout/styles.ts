import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 4rem 1rem;
  width: 100;

  h1 {
    font-size: 2.2rem;
    font-weight: 400;
    letter-spacing: 2px;
    color: ${(props) => props.theme['gray-800']};
  }

  > div {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
`
