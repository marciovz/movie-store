import { QueryClientProvider } from 'react-query'

import { queryClient } from '../../services/queryClient'
import { ListCheckoutMovies } from './ListCheckoutMovie'
import { CheckoutForm } from './CheckoutForm'
import { CheckoutActionContextProvider } from './CheckoutActionContext'

import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutActionContextProvider>
      <QueryClientProvider client={queryClient}>
        <CheckoutContainer>
          <h1>Finalizar Compra</h1>
          <div>
            <CheckoutForm />
            <ListCheckoutMovies />
          </div>
        </CheckoutContainer>
      </QueryClientProvider>
    </CheckoutActionContextProvider>
  )
}
