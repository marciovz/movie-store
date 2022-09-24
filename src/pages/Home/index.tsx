import { useEffect, useState } from 'react'
import { Spinner } from 'phosphor-react'

import { Header } from '../../componets/Header'
import { InputFilter } from '../../componets/InputFilter'
import { MovieCard } from '../../componets/MovieCard'

import { useMovies } from '../../services/hooks/useMovies'

import { HomeContainer, ListMoviesContainer } from './styles'

interface IMovie {
  id: number
  title: string
  genre_ids: number[]
  vote_count: number
  release_date: string
  backdrop_path: string
  adult: boolean
}

const page = 1

export function Home() {
  const [movies, setMovies] = useState<IMovie[]>([])
  const { data } = useMovies(page)

  useEffect(() => {
    if (!data) return
    setMovies(data.results)
  }, [data])

  return (
    <HomeContainer>
      <Header />
      <InputFilter updateTextFilter={() => {}} />
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
