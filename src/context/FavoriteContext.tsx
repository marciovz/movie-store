import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface IFavoriteMovie {
  id: number
  title: string
  imageUrl: string
  price: number
}

interface IFavoriteMovieContext {
  favoriteMovies: IFavoriteMovie[]
  amountFavoriteMovies: number
  addNewFavoriteMovies: (favoriteMovie: IFavoriteMovie) => void
  removeAllFavoritesMovies: () => void
  removeOneFavoriteMovie: (id: number) => void
}

interface PropsFavoriteMovieContextProvider {
  children: ReactNode
}

export const FavoriteMovieContext = createContext({} as IFavoriteMovieContext)

export function FavoriteMovieContextProvider({
  children,
}: PropsFavoriteMovieContextProvider) {
  const [favoriteMovies, setFavoriteMovies] = useState<IFavoriteMovie[]>([])
  const [amountFavoriteMovies, setAmountFavoriteMovies] = useState(0)

  useEffect(() => {
    setAmountFavoriteMovies(favoriteMovies.length)
  }, [favoriteMovies])

  function addNewFavoriteMovies({
    id,
    title,
    imageUrl,
    price,
  }: IFavoriteMovie) {
    const findMovieInList = favoriteMovies.find((movie) => movie.id === id)
    if (findMovieInList) return
    setFavoriteMovies((state) => [...state, { id, title, imageUrl, price }])
  }

  function removeAllFavoritesMovies() {
    setFavoriteMovies([])
  }

  function removeOneFavoriteMovie(id: number) {
    const updatedFavoriteList = favoriteMovies.filter(
      (movie) => movie.id !== id,
    )
    setFavoriteMovies([...updatedFavoriteList])
  }

  return (
    <FavoriteMovieContext.Provider
      value={{
        favoriteMovies,
        addNewFavoriteMovies,
        amountFavoriteMovies,
        removeAllFavoritesMovies,
        removeOneFavoriteMovie,
      }}
    >
      {children}
    </FavoriteMovieContext.Provider>
  )
}

export const useFavoriteMovies = () => useContext(FavoriteMovieContext)
