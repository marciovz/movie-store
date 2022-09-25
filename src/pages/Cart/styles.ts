import styled from 'styled-components'

export const CartContainer = styled.div`
  padding: 4rem 1rem;
  width: 100%;

  header {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme['gray-800']};
    }

    button.esvaziar {
      font-size: 1.25rem;
      text-transform: uppercase;
      color: ${(props) => props.theme['gray-500']};
      border: none;
      background: transparent;
      cursor: pointer;
      transition: color 0.2s;

      :hover {
        color: ${(props) => props.theme['gray-800']};
      }
    }
  }

  div.itemCart {
    margin-top: 1.25rem 1.9rem;
    padding: 1.25rem 1.9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-600']};
    font-size: 1.5rem;

    border-bottom: 1px solid ${(props) => props.theme['gray-300']};

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 8px;
      object-fit: cover;
    }

    p.title {
      width: 40%;
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

  footer {
    padding: 1.9rem 1.9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
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

    div {
      display: flex;
      align-items: baseline;
      gap: 1rem;

      p {
        color: ${(props) => props.theme['gray-500']};
        font-size: 1.5rem;
      }

      span {
        font-weight: bold;
        color: ${(props) => props.theme['gray-700']};
        font-size: 2.2rem;
      }
    }
  }
`
