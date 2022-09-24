import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'

import { CartMovieContextProvider } from './context/CartContext'
import { FavoriteMovieContextProvider } from './context/FavoriteContext'
import { queryClient } from './services/queryClient'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <CartMovieContextProvider>
      <FavoriteMovieContextProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>

            <GlobalStyle />
          </ThemeProvider>
        </QueryClientProvider>
      </FavoriteMovieContextProvider>
    </CartMovieContextProvider>
  )
}

export default App
