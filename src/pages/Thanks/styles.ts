import styled from 'styled-components'

export const ThanksContainer = styled.div`
  min-height: 47rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme['gray-800']};
  }

  img {
    width: 18rem;
    height: 18rem;
  }

  p {
    margin-top: 1rem;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-500']};
  }

  a {
    margin-top: 2.4rem;
    padding: 1rem 3rem;

    font-size: 1.6rem;
    font-weight: bolder;
    color: ${(props) => props.theme.white};
    border-radius: 8px;
    background: ${(props) => props.theme['green-300']};
    transition: background 0.2s;

    :hover {
      background: ${(props) => props.theme['green-500']};
    }
  }
`
