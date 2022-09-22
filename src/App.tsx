import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <p>Home - Movie Store</p>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
