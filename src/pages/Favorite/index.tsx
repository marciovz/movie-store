import { Trash, ShoppingCart } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CartMovieContext } from '../../context/CartContext'

import { FavoriteMovieContext } from '../../context/FavoriteContext'
import { formatPrice } from '../../utils/formatPrice'

import { FavoriteContainer } from './styles'

interface IFavoriteMovie {
  id: number
  title: string
  imageUrl: string
  price: number
  priceFormated: string
}

const ImageUrl = import.meta.env.VITE_IMG
export function Favorite() {
  const [favorite, setFavorites] = useState<IFavoriteMovie[]>([])

  const { favoriteMovies, removeAllFavoritesMovies, removeOneFavoriteMovie } =
    useContext(FavoriteMovieContext)
  const { addNewCartMovies } = useContext(CartMovieContext)

  useEffect(() => {
    const updatedNewFavorites = favoriteMovies.map((itemFavorite) => {
      return {
        ...itemFavorite,
        priceFormated: formatPrice(itemFavorite.price),
      }
    })
    setFavorites(updatedNewFavorites)
  }, [favoriteMovies])

  function handleAddMovieToCart(itemFavorite: IFavoriteMovie) {
    addNewCartMovies(itemFavorite)
  }

  function handleEmptyFavorite() {
    removeAllFavoritesMovies()
  }

  function handleRemoveItem(id: number) {
    removeOneFavoriteMovie(id)
  }

  return (
    <FavoriteContainer>
      <header>
        <h1>Meus Favoritos</h1>
        <button className="esvaziar" onClick={handleEmptyFavorite}>
          Esvaziar Favoritos
        </button>
      </header>

      {favorite.map((itemFavorite) => (
        <div className="itemCart" key={itemFavorite.id}>
          <img
            src={`${ImageUrl}${itemFavorite.imageUrl}`}
            alt={itemFavorite.title}
          />
          <p className="title">{itemFavorite.title}</p>
          <p className="price">{itemFavorite.priceFormated}</p>
          <button onClick={() => handleAddMovieToCart(itemFavorite)}>
            <ShoppingCart size={32} weight="fill" />
          </button>
          <button onClick={() => handleRemoveItem(itemFavorite.id)}>
            <Trash size={32} weight="fill" />
          </button>
        </div>
      ))}
    </FavoriteContainer>
  )
}
