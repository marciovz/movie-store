import { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

export function Button({ children, loading, ...props }: ButtonProps) {
  return (
    <Container type="button" {...props}>
      {loading ? 'Carregando...' : children}
    </Container>
  )
}
