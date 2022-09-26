import styled, { css } from 'styled-components'

import { Tooltip } from '../Tooltip'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  background: ${(props) => props.theme.white};
  border-radius: 10px;
  padding: 1rem;
  width: 100%;

  border: 4px solid ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-500']};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }

  svg {
    margin-right: 1rem;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${(props) => props.theme['red-700']};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${(props) => props.theme['gray-500']};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${(props) => props.theme['yellow-500']};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    font-size: 1.3rem;
    color: ${(props) => props.theme['gray-600']};

    &::placeholder {
      color: ${(props) => props.theme['gray-300']};
    }
  }
`

export const Error = styled(Tooltip)`
  position: absolute;
  right: 10px;
  height: 1.25rem;
  margin-left: 1rem;

  svg {
    margin: 0;
  }

  span {
    background: ${(props) => props.theme['red-700']};
    color: #fff;

    &::before {
      border-color: ${(props) => props.theme['red-700']} transparent;
    }
  }
`
