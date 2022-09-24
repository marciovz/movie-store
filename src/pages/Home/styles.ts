import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div.input-filter {
    margin-top: -1.687rem;
  }
`

export const ListMoviesContainer = styled.main`
  margin: 3rem 0;
  padding: 2rem;
  width: 80rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;
  border-radius: 1rem;

  svg.spinner {
    margin: 12rem auto;
  }
`
