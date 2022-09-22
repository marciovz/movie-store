import { MagnifyingGlass } from 'phosphor-react'
import { useState } from 'react'
import { Container } from './styles'

interface PropsInputFilter {
  updateTextFilter: (textFilter: string) => void
}

export function InputFilter({ updateTextFilter }: PropsInputFilter) {
  const [textfilter, setTextFilter] = useState('')

  function handleSubmitFilter() {
    const cleanNewTextfilter = textfilter.trim()

    if (cleanNewTextfilter === '') {
      setTextFilter('')
      return
    }
    updateTextFilter(textfilter)
    setTextFilter('')
  }

  return (
    <Container className="input-filter">
      <input
        type="text"
        placeholder="Pesquisa"
        onChange={(e) => setTextFilter(e.target.value)}
        value={textfilter}
      />
      <button type="submit" onClick={handleSubmitFilter}>
        <MagnifyingGlass size={32} />
      </button>
    </Container>
  )
}
