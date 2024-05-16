import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Footer from './components/Footer.jsx'
import { CartProvider } from './components/cartContext/CartProvider.jsx'
import Cart from './components/Cart.jsx'
import CheckOut from './components/CheckOut.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <main className="p-4 grow">
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/item/:foodId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='*' element={<h1>404 - No se encuentra la pagina.</h1>} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
      <ToastContainer />
    </BrowserRouter >
  )
}

export default App
