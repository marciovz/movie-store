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
}

interface GetMoviesResponse {
  page: number
  results: IMovie[]
  total_pages: number
  total_results: number
}

interface PropsGEtMovies {
  page?: number
  query?: string
}

const moviesUrl = import.meta.env.VITE_API
const moviesUrlSearch = import.meta.env.VITE_API_SEARCH

const apiKey = import.meta.env.VITE_API_KEY
const api = axios.create()

async function getMovies({
  page = 1,
  query = '',
}: PropsGEtMovies): Promise<GetMoviesResponse> {
  const url =
    !query || query === ''
      ? `${moviesUrl}top_rated`
      : `${moviesUrlSearch}/?query=${query}`

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

export function useMovies({ page = 1, query = '' }: PropsGEtMovies) {
  return useQuery(
    ['movies', page, query],
    async () => await getMovies({ page, query }),
    {
      staleTime: 1000 * 60 * 10, // 10 minutos
    },
  ) as UseQueryResult<GetMoviesResponse, unknown>
}
