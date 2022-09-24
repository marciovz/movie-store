import axios from 'axios'
import { useQuery, UseQueryResult } from 'react-query'

interface IMovie {
  id: number
  title: string
  genre_ids: number[]
  release_date: string
  backdrop_path: string
  adult: boolean
  vote_count: number

  // poster_path: string
  // popularity: number
  // original_title: string
  // vote_average: 8.7
  // original_language: string
  // overview: string
  // video: boolean
}

interface GetMoviesResponse {
  page: number
  results: IMovie[]
  total_pages: number
  total_results: number
}

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const url = `${moviesUrl}top_rated` // ?${apiKey}
const api = axios.create()

async function getMovies(page = 1): Promise<GetMoviesResponse> {
  const { data } = await api.get(url, {
    params: {
      api_key: apiKey,
      page,
    },
  })

  const movies = data.results.map((movie: IMovie) => {
    return {
      id: movie.id,
      title: movie.title,
      genre_ids: movie.genre_ids,
      release_date: movie.release_date,
      backdrop_path: movie.backdrop_path,
      adult: movie.adult,
      vote_count: movie.vote_count,
    }
  }) as IMovie[]

  return {
    page: data.page,
    results: movies,
    total_pages: data.total_pages,
    total_results: data.total_results,
  }
}

export function useMovies(page: number) {
  return useQuery(['movies', page], async () => await getMovies(page), {
    staleTime: 1000 * 60 * 10, // 10 minutos
  }) as UseQueryResult<GetMoviesResponse, unknown>
}
