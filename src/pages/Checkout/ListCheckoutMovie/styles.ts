import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 2fr 5fr 1fr 2fr 1fr;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme['gray-700']};

  p.qtd,
  p.price {
    text-align: center;
  }
`

export const Content = styled.div`
  div.itemCart {
    margin-top: 0.68rem 1.9rem;
    padding: 0.68rem 0;
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 5fr 1fr 2fr 1fr;
    color: ${(props) => props.theme['gray-600']};
    font-size: 1.1rem;

    p.qtd,
    p.price {
      text-align: center;
    }

    border-bottom: 1px solid ${(props) => props.theme['gray-300']};

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 8px;
      object-fit: cover;
    }

    button {
      display: flex;
      cursor: pointer;
      border: none;

      svg {
        width: 2rem;
        height: 2rem;
        transition: color 0.2s;
        :hover {
          color: ${(props) => props.theme['gray-400']};
        }
      }
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  div.total {
    margin: 1.2rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 1px;
      color: ${(props) => props.theme['gray-700']};
    }

    span {
      font-weight: bold;
      color: ${(props) => props.theme['gray-700']};
      font-size: 2rem;
    }
  }

  button {
    margin-top: 2rem;

    width: 100%;
    padding: 0.75rem 1.25rem;
    font-size: 1.25rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    cursor: pointer;
    border: 0;
    border-radius: 8px;
    background: ${(props) => props.theme['green-300']};
    transition: background 0.2s;

    :disabled {
      cursor: not-allowed;
    }
    :hover:not([disabled]) {
      background: ${(props) => props.theme['green-500']};
    }
  }
`
