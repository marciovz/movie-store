import { Outlet } from 'react-router-dom'
import { Header } from '../../componets/Header'
import { InputFilter } from '../../componets/InputFilter'

import { Container, Content } from './styles'

export function Main() {
  return (
    <Container>
      <Header />
      <InputFilter />
      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}
