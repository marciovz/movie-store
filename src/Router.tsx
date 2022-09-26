import { Routes, Route } from 'react-router-dom'

import { Main } from './pages/Main'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Favorite } from './pages/Favorite'
import { Checkout } from './pages/Checkout'
import { Thanks } from './pages/Thanks'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thanks" element={<Thanks />} />
      </Route>
    </Routes>
  )
}
