import { createContext, ReactNode, useContext, useState } from 'react'

interface IRequestMovieContext {
  page: number
  query: string
  setPageList: (_page: number) => void
  setFilterQuery: (_filter: string) => void
}

interface PropsRequestMovieContextProvider {
  children: ReactNode
}

export const RequestMovieContext = createContext({} as IRequestMovieContext)

export function RequestMovieContextProvider({
  children,
}: PropsRequestMovieContextProvider) {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')

  function setPageList(_page: number) {
    if (_page <= 0) _page = 1
    setPage(_page)
  }

  function setFilterQuery(_query: string) {
    setQuery(_query)
  }

  return (
    <RequestMovieContext.Provider
      value={{
        page,
        query,
        setPageList,
        setFilterQuery,
      }}
    >
      {children}
    </RequestMovieContext.Provider>
  )
}

export const useRequestMovies = () => useContext(RequestMovieContext)
