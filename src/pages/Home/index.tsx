import { useContext, useEffect, useState } from 'react'
import { Spinner } from 'phosphor-react'

import { Header } from '../../componets/Header'
import { InputFilter } from '../../componets/InputFilter'
import { MovieCard } from '../../componets/MovieCard'

import { useMovies } from '../../services/hooks/useMovies'

import { HomeContainer, ListMoviesContainer } from './styles'
import { RequestMovieContext } from '../../context/RequestMoviesContext'

interface IMovie {
  id: number
  title: string
  genre_ids: number[]
  vote_count: number
  release_date: string
  backdrop_path: string
  adult: boolean
}

export function Home() {
  const [movies, setMovies] = useState<IMovie[]>([])
  const { page, query } = useContext(RequestMovieContext)
  const { data } = useMovies({ page, query })

  useEffect(() => {
    if (!data) return
    setMovies(data.results)
  }, [data])

  return (
    <HomeContainer>
      <Header />
      <InputFilter />
      <ListMoviesContainer>
        {movies.length === 0 ? (
          <Spinner size={32} className="spinner" />
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.id} movieProperties={movie} />
          ))
        )}
      </ListMoviesContainer>
    </HomeContainer>
  )
}
