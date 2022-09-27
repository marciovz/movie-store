import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  span {
    width: 10rem;
    background: ${(props) => props.theme['yellow-500']};
    padding: 8px;
    border-radius: 4px;
    font-size: 0.87rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 0.75rem);
    left: 50%;
    transform: translateX(-50%);
    color: ${(props) => props.theme['gray-600']};

    &::before {
      content: '';
      border-style: solid;
      border-color: ${(props) => props.theme['yellow-500']} transparent;
      border-width: 0.37rem 0.37rem 0 0.37rem;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`
