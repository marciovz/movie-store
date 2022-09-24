import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'

import { queryClient } from './services/queryClient'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { FavoriteMovieContextProvider } from './context/FavoriteContext'

function App() {
  return (
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
  )
}

export default App
