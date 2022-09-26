import { useContext, useEffect, useState } from 'react'
import { Trash } from 'phosphor-react'

import { CheckoutActionContext } from '../CheckoutActionContext'
import { CartMovieContext } from '../../../context/CartContext'
import { formatPrice } from '../../../utils/formatPrice'

import { CartContainer, Header, Content, Footer } from './styles'

interface ICartMovie {
  id: number
  title: string
  imageUrl: string
  price: number
  amount: number
  priceFormated: string
}

const ImageUrl = import.meta.env.VITE_IMG

export function ListCheckoutMovies() {
  const [cart, setCart] = useState<ICartMovie[]>([])
  const { handleSubmit, handleCreateUser } = useContext(CheckoutActionContext)
  const { cartMovies, removeOneMovieItemFromCart } =
    useContext(CartMovieContext)

  const emptyCart = cart.length === 0

  useEffect(() => {
    const updatedNewCartMovies = cartMovies.map((itemCart) => {
      return {
        ...itemCart,
        priceFormated: formatPrice(itemCart.price),
      }
    })
    setCart(updatedNewCartMovies)
  }, [cartMovies])

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount
    }, 0),
  )

  function handleRemoveOneItem(id: number) {
    removeOneMovieItemFromCart(id)
  }

  return (
    <CartContainer>
      <Header>
        <p className="img">Image</p>
        <p className="name">Nome</p>
        <p className="qtd">Qtd</p>
        <p className="price">Preço</p>
      </Header>

      <Content>
        {cart.map((itemCart) => (
          <div className="itemCart" key={itemCart.id}>
            <img src={`${ImageUrl}${itemCart.imageUrl}`} alt={itemCart.title} />
            <p className="name">{itemCart.title}</p>
            <p className="qtd">{itemCart.amount}</p>
            <p className="price">{itemCart.priceFormated}</p>
            <button onClick={() => handleRemoveOneItem(itemCart.id)}>
              <Trash size={32} weight="fill" />
            </button>
          </div>
        ))}
      </Content>

      <Footer>
        <div className="total">
          <p>Total:</p>
          <span>{total}</span>
        </div>
        <button
          form="form-checkout"
          disabled={emptyCart}
          onClick={handleSubmit(handleCreateUser)}
        >
          Finalizar
        </button>
      </Footer>
    </CartContainer>
  )
}
