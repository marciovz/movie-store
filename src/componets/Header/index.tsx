import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Heart, ShoppingCart } from 'phosphor-react'

import { IconLink } from './IconLink'
import { FavoriteMovieContext } from '../../context/FavoriteContext'
import { CartMovieContext } from '../../context/CartContext'
import logoMovieStore from '../../assets/logo-movie-store.svg'

import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  const { amountFavoriteMovies } = useContext(FavoriteMovieContext)
  const { amountCartMovies } = useContext(CartMovieContext)
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logoMovieStore} alt="logo Movies Store" />
        </NavLink>

        <nav>
          <IconLink
            link="/favorite"
            title="favoritos"
            amount={amountFavoriteMovies}
          >
            <Heart weight="fill" />
          </IconLink>

          <IconLink link="/cart" title="amount" amount={amountCartMovies}>
            <ShoppingCart weight="fill" />
          </IconLink>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
