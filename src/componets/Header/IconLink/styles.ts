import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const IconNavLink = styled(NavLink)`
  position: relative;
  line-height: 0;

  span {
    position: absolute;
    top: -0.625rem;
    right: -0.625rem;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    line-height: 0;
    background: ${(props) => props.theme['yellow-400']};
    border-radius: 50%;
  }

  svg {
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme['gray-600']};
    transition: color 0.2s;

    :hover {
      color: ${(props) => props.theme['gray-500']};
    }
  }
`
