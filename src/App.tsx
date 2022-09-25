import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'

import { CartMovieContextProvider } from './context/CartContext'
import { FavoriteMovieContextProvider } from './context/FavoriteContext'
import { RequestMovieContextProvider } from './context/RequestMoviesContext'
import { queryClient } from './services/queryClient'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <CartMovieContextProvider>
      <FavoriteMovieContextProvider>
        <RequestMovieContextProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={defaultTheme}>
              <BrowserRouter>
                <Router />
              </BrowserRouter>

              <GlobalStyle />
            </ThemeProvider>
          </QueryClientProvider>
        </RequestMovieContextProvider>
      </FavoriteMovieContextProvider>
    </CartMovieContextProvider>
  )
}

export default App
