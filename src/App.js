import './style.css'
import './mediaquery.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import Cart from './components/Cart'
import CartProvider from './context/CartContext'

function App() {
  const greetingMsj = '¡Elegí tu hamburguesa preferida!'

  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer textoSalida={greetingMsj}/> } />
          <Route path='/categorias/:categoryId' element={ <ItemListContainer /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;