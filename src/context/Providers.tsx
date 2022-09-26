import { ReactNode } from 'react'
import { QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import { CartMovieContextProvider } from './CartContext'
import { FavoriteMovieContextProvider } from './FavoriteContext'
import { RequestMovieContextProvider } from './RequestMoviesContext'

import { defaultTheme } from '../styles/themes/default'

import { queryClient } from '../services/queryClient'

interface PropsAppProvider {
  children: ReactNode
}

export function AppProviders({ children }: PropsAppProvider) {
  return (
    <CartMovieContextProvider>
      <FavoriteMovieContextProvider>
        <RequestMovieContextProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
          </QueryClientProvider>
        </RequestMovieContextProvider>
      </FavoriteMovieContextProvider>
    </CartMovieContextProvider>
  )
}
