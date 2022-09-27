import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.button`
  background: ${(props) => props.theme['green-300']};
  height: 3.5rem;
  border-radius: 10px;
  border: 0;
  padding: 0 16rem;
  color: ${(props) => props.theme['gray-600']};
  width: 100%;
  font-weight: 500;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${darken(0.2, `(props) => props.theme.[green-200]`)};
  }
`
