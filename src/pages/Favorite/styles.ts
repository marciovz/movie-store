import styled from 'styled-components'

export const FavoriteContainer = styled.div`
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

    & ~ div.itemCart {
      border-top: 1px solid ${(props) => props.theme['gray-300']};
    }

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
`
