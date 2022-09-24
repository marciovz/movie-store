import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Heart, ShoppingCart } from 'phosphor-react'

import { IconLink } from './IconLink'
import { FavoriteMovieContext } from '../../context/FavoriteContext'
import logoMovieStore from '../../assets/logo-movie-store.svg'

import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  const { amountFavoriteMovies } = useContext(FavoriteMovieContext)
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logoMovieStore} alt="" />
        </NavLink>

        <nav>
          <IconLink
            link="/favorite"
            title="favoritos"
            amount={amountFavoriteMovies}
          >
            <Heart weight="fill" />
          </IconLink>

          <IconLink link="/checkout" title="amount" amount={1}>
            <ShoppingCart weight="fill" />
          </IconLink>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
