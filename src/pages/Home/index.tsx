import { useEffect, useState } from 'react'
import { Header } from '../../componets/Header'
import { InputFilter } from '../../componets/InputFilter'
import { MovieCard } from '../../componets/MovieCard'

import { HomeContainer, ListMoviesContainer } from './styles'

interface IMovie {
  id: number
  title: string
  genre_ids: number[]
  vote_average: 8.7
  release_date: string
  poster_path: string

  popularity: number
  backdrop_path: string
  original_title: string
  vote_count: number
  adult: boolean
  original_language: string
  overview: string
  video: boolean
}

export function Home() {
  const [movies, setMovies] = useState<IMovie[]>([])

  useEffect(() => {
    setMovies([
      {
        adult: false,
        backdrop_path: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
        genre_ids: [18, 80],
        id: 238,
        original_language: 'en',
        original_title: 'The Godfather',
        overview:
          'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
        popularity: 95.06,
        poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        release_date: '1972-03-14',
        title: 'The Godfather',
        video: false,
        vote_average: 8.7,
        vote_count: 16601,
      },
      {
        adult: false,
        backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
        genre_ids: [18, 80],
        id: 278,
        original_language: 'en',
        original_title: 'The Shawshank Redemption',
        overview:
          'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
        popularity: 77.997,
        poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        release_date: '1994-09-23',
        title: 'The Shawshank Redemption',
        video: false,
        vote_average: 8.7,
        vote_count: 22322,
      },
      {
        adult: false,
        backdrop_path: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
        genre_ids: [18, 80],
        id: 239,
        original_language: 'en',
        original_title: 'The Godfather',
        overview:
          'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
        popularity: 95.06,
        poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        release_date: '1972-03-14',
        title: 'The Godfather',
        video: false,
        vote_average: 8.7,
        vote_count: 16601,
      },
      {
        adult: false,
        backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
        genre_ids: [18, 80],
        id: 279,
        original_language: 'en',
        original_title: 'The Shawshank Redemption',
        overview:
          'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
        popularity: 77.997,
        poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        release_date: '1994-09-23',
        title: 'The Shawshank Redemption',
        video: false,
        vote_average: 8.7,
        vote_count: 22322,
      },
      {
        adult: false,
        backdrop_path: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
        genre_ids: [18, 80],
        id: 240,
        original_language: 'en',
        original_title: 'The Godfather',
        overview:
          'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
        popularity: 95.06,
        poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        release_date: '1972-03-14',
        title: 'The Godfather',
        video: false,
        vote_average: 8.7,
        vote_count: 16601,
      },
      {
        adult: false,
        backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
        genre_ids: [18, 80],
        id: 280,
        original_language: 'en',
        original_title: 'The Shawshank Redemption',
        overview:
          'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
        popularity: 77.997,
        poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        release_date: '1994-09-23',
        title: 'The Shawshank Redemption',
        video: false,
        vote_average: 8.7,
        vote_count: 22322,
      },
      {
        adult: false,
        backdrop_path: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
        genre_ids: [18, 80],
        id: 241,
        original_language: 'en',
        original_title: 'The Godfather',
        overview:
          'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
        popularity: 95.06,
        poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        release_date: '1972-03-14',
        title: 'The Godfather',
        video: false,
        vote_average: 8.7,
        vote_count: 16601,
      },
      {
        adult: false,
        backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
        genre_ids: [18, 80],
        id: 281,
        original_language: 'en',
        original_title: 'The Shawshank Redemption',
        overview:
          'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
        popularity: 77.997,
        poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        release_date: '1994-09-23',
        title: 'The Shawshank Redemption',
        video: false,
        vote_average: 8.7,
        vote_count: 22322,
      },
    ])
  }, [])

  return (
    <HomeContainer>
      <Header />
      <InputFilter updateTextFilter={() => {}} />
      <ListMoviesContainer>
        {movies &&
          movies.map((movie) => (
            <MovieCard key={movie.id} movieProperties={movie} />
          ))}
      </ListMoviesContainer>
    </HomeContainer>
  )
}
