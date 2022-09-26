import { Link } from 'react-router-dom'
import logoMovieStore from '../../assets/logo-movie-store.svg'
import { ThanksContainer } from './styles'

export function Thanks() {
  return (
    <ThanksContainer>
      <h1>SUA COMPRA FOI FINALIZADA COM SUCESSO</h1>
      <img src={logoMovieStore} alt="logo Movies Store" />
      <p>OBRIGADO POR SER NOSSO CLIENTE</p>
      <Link to={'/'}>VOLTAR PARA LOJA</Link>
    </ThanksContainer>
  )
}
