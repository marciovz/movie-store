import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding-left: 1rem;
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  overflow: hidden;
  background: ${(props) => props.theme.white};

  input {
    min-width: 24rem;
    font-size: 1.125rem;
    background: transparent;
    border: none;
  }

  button {
    padding: 1rem 1.25rem;
    line-height: 0;
    color: ${(props) => props.theme['gray-600']};
    background: transparent;
    border: none;
    cursor: pointer;
    transition: background 0.2s;

    :hover {
      color: ${(props) => props.theme['gray-700']};
      background: ${(props) => props.theme['gray-100']};
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`
