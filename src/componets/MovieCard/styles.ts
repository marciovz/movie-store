import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  padding: 0.3125rem 0.3125rem 1.25rem;

  display: flex;
  flex-direction: column;

  border-radius: 3rem 0;
  border: 0.3125rem solid ${(props) => props.theme['green-200']};
  background: ${(props) => props.theme.white};
  overflow: hidden;

  time {
    display: block;
    margin: -0.9rem auto;
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-500']};
    z-index: 1;
    border: 1px solid ${(props) => props.theme['gray-100']};
    border-radius: 0.5rem;
    background: ${(props) => props.theme.white};
  }
`

export const CardImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem 0 0;

  overflow: hidden;

  img {
    height: 12.5rem;
    object-fit: fill;
  }

  button.favorite {
    position: absolute;
    top: 1rem;
    right: 1rem;
    line-height: 0;
    background: transparent;
    border: none;
    cursor: pointer;

    :hover {
      top: 0.9rem;
      right: 0.9rem;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${(props) => props.theme['yellow-400']};
      transition: color 0.2s;

      :hover {
        width: 2.2rem;
        height: 2.2rem;
        color: ${(props) => props.theme['yellow-500']};
      }
    }
  }
`

export const MovieInfo = styled.div`
  margin-top: 1.25rem;
  padding: 0.625rem;

  h1 {
    font-family: 'Baloo+2';
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-800']};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  div.star {
    margin-top: 0.6rem;
    display: flex;
    align-items: center;
    gap: 0.375rem;

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${(props) => props.theme['yellow-400']};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-700']};
    }
  }

  div.toCart {
    margin-top: 0.3125;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: block;
      font-size: 1rem;
      font-weight: 700;
      color: ${(props) => props.theme['gray-700']};
    }

    button {
      padding: 0.3125rem 0.93rem;
      display: flex;
      align-items: center;
      gap: 0.3125;
      border: none;
      border-radius: 0.25rem;
      background: ${(props) => props.theme['green-200']};
      cursor: pointer;
      transition: background 0.2s;

      :hover {
        background: ${(props) => props.theme['green-300']};
      }
    }
  }
`
