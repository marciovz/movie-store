import { useContext, useEffect, useState } from 'react'
import { Heart, Star, ShoppingCart } from 'phosphor-react'

import { formatPrice } from '../../utils/formatPrice'
import { formatDateInFull } from '../../utils/formatDateInFull'
import { FavoriteMovieContext } from '../../context/FavoriteContext'
import { CartMovieContext } from '../../context/CartContext'

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
const price = 79.25

export function MovieCard({ movieProperties }: PropsMovieCard) {
  const [movie, setMovie] = useState<IMovieCard>()

  const { addNewFavoriteMovies } = useContext(FavoriteMovieContext)
  const { addNewCartMovies } = useContext(CartMovieContext)

  useEffect(() => {
    setMovie({
      ...movieProperties,
      dateFormated: formatDateInFull({
        date: movieProperties.release_date,
        dateStyle: 'long',
      }),
      priceFormated: formatPrice(price),
    })
  }, [movieProperties])

  const handleAddToFavorite = () => {
    movie &&
      addNewFavoriteMovies({
        id: movie.id,
        title: movie.title,
        imageUrl: movie.backdrop_path,
        price,
      })
  }

  const handleAddToCart = () => {
    movie &&
      addNewCartMovies({
        id: movie.id,
        title: movie.title,
        imageUrl: movie.backdrop_path,
        price,
      })
  }

  return (
    <>
      {movie && (
        <CardContainer>
          <CardImage>
            <img src={`${ImageUrl}${movie.backdrop_path}`} alt="" />
            <button className="favorite" onClick={() => {}}>
              <Heart weight="fill" onClick={handleAddToFavorite} />
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
              <button onClick={handleAddToCart}>
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
