import { ReactElement } from 'react'

import { IconNavLink } from './styles'

interface PropsLinkHeader {
  link: string
  amount: number
  title: string
  children: ReactElement
}
export function IconLink({
  link = '/',
  amount = 0,
  title,
  children,
}: PropsLinkHeader) {
  return (
    <IconNavLink to={link} title={title}>
      {amount > 0 && <span>{amount}</span>}
      {children}
    </IconNavLink>
  )
}
