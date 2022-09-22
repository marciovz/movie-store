import { Header } from '../../componets/Header'
import { InputFilter } from '../../componets/InputFilter'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <InputFilter updateTextFilter={() => {}} />
      <p>pagina home</p>
    </HomeContainer>
  )
}
