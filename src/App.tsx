import { BrowserRouter } from 'react-router-dom'
import { AppProviders } from './context/Providers'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </AppProviders>
  )
}

export default App
