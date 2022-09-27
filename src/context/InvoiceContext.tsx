import { createContext, ReactNode, useContext, useState } from 'react'
import { CartMovieContext } from './CartContext'

interface IProduct {
  id: number
  title: string
  imageUrl: string
  amount: number
  price: number
}

interface IClient {
  name: string
  cpf: number
  phone: number
  email: string
  cep: number
  address: string
  city: string
  state: string
}

interface IInvoiceContext {
  solicitationInvoice: (client: IClient) => void
}

interface PropsInvoiceContextProvider {
  children: ReactNode
}

export const InvoiceContext = createContext({} as IInvoiceContext)

export function InvoiceContextProvider({
  children,
}: PropsInvoiceContextProvider) {
  const [, setClient] = useState<IClient>({} as IClient)
  const [, setProducts] = useState<IProduct[]>([])

  const { cartMovies, removeAllMoviesFromCart } = useContext(CartMovieContext)

  function solicitationInvoice(_client: IClient) {
    setProducts(cartMovies)
    setClient(_client)
    removeAllMoviesFromCart()
  }

  return (
    <InvoiceContext.Provider value={{ solicitationInvoice }}>
      {children}
    </InvoiceContext.Provider>
  )
}

export const useInvoice = () => useContext(InvoiceContext)
