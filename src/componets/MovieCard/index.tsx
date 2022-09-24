import { Heart, Star, ShoppingCart } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { formatPrice } from '../../utils/formatPrice'
import { formatDateInFull } from '../../utils/formatDateInFull'

import { CardContainer, CardImage, MovieInfo } from './styles'

interface IMovie {
  id: number
  title: string
  genre_ids: number[]
  vote_count: number
  release_date: string
  backdrop_path: string
  adult: boolean
}

interface PropsMovieCard {
  movieProperties: IMovie
}
interface IMovieCard extends IMovie {
  priceFormated: string
  dateFormated: string
}

const ImageUrl = import.meta.env.VITE_IMG

export function MovieCard({ movieProperties }: PropsMovieCard) {
  const [movie, setMovie] = useState<IMovieCard>()

  useEffect(() => {
    setMovie({
      ...movieProperties,
      dateFormated: formatDateInFull({
        date: movieProperties.release_date,
        dateStyle: 'long',
      }),
      priceFormated: formatPrice(79.25),
    })
  }, [movieProperties])

  return (
    <>
      {movie && (
        <CardContainer>
          <CardImage>
            <img src={`${ImageUrl}${movie.backdrop_path}`} alt="" />
            <button className="favorite" onClick={() => {}}>
              <Heart weight="fill" />
            </button>
          </CardImage>

          <time>{movie.dateFormated}</time>

          <MovieInfo>
            <h1>{movie.title}</h1>

            <div className="star">
              <Star weight="fill" />
              <p>{movie.vote_count}</p>
            </div>

            <div className="toCart">
              <span>{movie.priceFormated}</span>
              <button>
                <ShoppingCart weight="fill" />
                Adicionar
              </button>
            </div>
          </MovieInfo>
        </CardContainer>
      )}
    </>
  )
}
