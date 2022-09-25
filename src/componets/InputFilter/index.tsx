import { MagnifyingGlass } from 'phosphor-react'
import { FormEvent, useContext, useState } from 'react'
import { RequestMovieContext } from '../../context/RequestMoviesContext'
import { Container } from './styles'

export function InputFilter() {
  const [textfilter, setTextFilter] = useState('')
  const { setFilterQuery } = useContext(RequestMovieContext)

  function handleformSubmit(event: FormEvent) {
    event.preventDefault()
    setFilterQuery(textfilter)
  }

  return (
    <Container className="input-filter">
      <form onSubmit={handleformSubmit}>
        <input
          type="text"
          placeholder="Pesquisa"
          onChange={(e) => setTextFilter(e.target.value)}
          value={textfilter}
        />
        <button type="submit" onClick={handleformSubmit}>
          <MagnifyingGlass size={32} />
        </button>
      </form>
    </Container>
  )
}
