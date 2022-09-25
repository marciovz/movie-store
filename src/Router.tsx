import { Routes, Route } from 'react-router-dom'

import { Main } from './pages/Main'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Cart } from './pages/Cart'
import { Favorite } from './pages/Favorite'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
    </Routes>
  )
}
