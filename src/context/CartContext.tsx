import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ICartMovie {
  id: number
  title: string
  imageUrl: string
  price: number
  amount: number
}

type IMovieWithoutAmount = Omit<ICartMovie, 'amount'>

interface ICartMovieContext {
  cartMovies: ICartMovie[]
  amountCartMovies: number
  addNewCartMovies: (cartMovie: IMovieWithoutAmount) => void
  removeMovieFromCart: (id: number) => void
  removeOneMovieItemFromCart: (id: number) => void
}

interface PropsCartMovieContextProvider {
  children: ReactNode
}

export const CartMovieContext = createContext({} as ICartMovieContext)

export function CartMovieContextProvider({
  children,
}: PropsCartMovieContextProvider) {
  const [cartMovies, setCartMovies] = useState<ICartMovie[]>([])
  const [amountCartMovies, setAmountCartMovies] = useState(0)

  console.log(cartMovies)

  useEffect(() => {
    setAmountCartMovies(cartMovies.length)
  }, [cartMovies])

  function addNewCartMovies({
    id,
    title,
    imageUrl,
    price,
  }: IMovieWithoutAmount) {
    const updatedCartMovies = cartMovies
    const index = updatedCartMovies.findIndex((movie) => movie.id === id)
    if (index < 0) {
      setCartMovies([
        ...updatedCartMovies,
        { id, title, imageUrl, price, amount: 1 },
      ])
    } else {
      updatedCartMovies[index].amount = updatedCartMovies[index].amount + 1
      setCartMovies(updatedCartMovies)
    }
  }

  function removeMovieFromCart(id: number) {
    const updatedMoviesList = cartMovies.filter((movie) => movie.id !== id)
    setCartMovies([...updatedMoviesList])
  }

  function removeOneMovieItemFromCart(id: number) {
    const updatedCartMovies = cartMovies
    const index = updatedCartMovies.findIndex((movie) => movie.id === id)
    if (index < 0) return

    let amount = updatedCartMovies[index].amount
    if (amount === 0 || amount === 1) {
      removeMovieFromCart(id)
      return
    }

    amount -= 1
    updatedCartMovies[index].amount = amount
    setCartMovies(updatedCartMovies)
  }

  return (
    <CartMovieContext.Provider
      value={{
        cartMovies,
        addNewCartMovies,
        amountCartMovies,
        removeMovieFromCart,
        removeOneMovieItemFromCart,
      }}
    >
      {children}
    </CartMovieContext.Provider>
  )
}

export const useCartMovies = () => useContext(CartMovieContext)
