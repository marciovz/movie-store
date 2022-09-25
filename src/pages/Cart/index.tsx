import { Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartMovieContext } from '../../context/CartContext'
import { formatPrice } from '../../utils/formatPrice'

import { CartContainer } from './styles'

interface ICartMovie {
  id: number
  title: string
  imageUrl: string
  price: number
  amount: number
  priceFormated: string
}

const ImageUrl = import.meta.env.VITE_IMG

export function Cart() {
  const [cart, setCart] = useState<ICartMovie[]>([])

  const { cartMovies, removeAllMoviesFromCart, removeOneMovieItemFromCart } =
    useContext(CartMovieContext)

  const navigate = useNavigate()

  useEffect(() => {
    const updatedNewCartMovies = cartMovies.map((itemCart) => {
      return {
        ...itemCart,
        priceFormated: formatPrice(itemCart.price),
      }
    })
    setCart(updatedNewCartMovies)
  }, [cartMovies])

  const emptyCart = cart.length === 0

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount
    }, 0),
  )

  function handleEmptyCart() {
    removeAllMoviesFromCart()
  }

  function handleRemoveOneItem(id: number) {
    removeOneMovieItemFromCart(id)
  }

  function handleRedirectToCheckout() {
    navigate('/checkout')
  }

  return (
    <CartContainer>
      <header>
        <h1>Meu Carrinho</h1>
        <button className="esvaziar" onClick={handleEmptyCart}>
          Esvaziar Carrinho
        </button>
      </header>

      {cart.map((itemCart) => (
        <div className="itemCart" key={itemCart.id}>
          <img src={`${ImageUrl}${itemCart.imageUrl}`} alt={itemCart.title} />
          <p className="title">{itemCart.title}</p>
          <p className="amount">{itemCart.amount}</p>
          <p className="price">{itemCart.priceFormated}</p>
          <button onClick={() => handleRemoveOneItem(itemCart.id)}>
            <Trash size={32} weight="fill" />
          </button>
        </div>
      ))}

      <footer>
        <button disabled={emptyCart} onClick={handleRedirectToCheckout}>
          Finalizar Pedido
        </button>

        <div>
          <p>Total:</p>
          <span>{total}</span>
        </div>
      </footer>
    </CartContainer>
  )
}
