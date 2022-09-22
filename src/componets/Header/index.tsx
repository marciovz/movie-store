import { NavLink } from 'react-router-dom'
import { Heart, ShoppingCart } from 'phosphor-react'

import logoMovieStore from '../../assets/logo-movie-store.svg'

import { HeaderContainer, HeaderContent } from './styles'
import { IconLink } from './IconLink'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logoMovieStore} alt="" />
        </NavLink>

        <nav>
          <IconLink link="/favorite" title="favoritos" amount={1}>
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
