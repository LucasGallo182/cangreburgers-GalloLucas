import './style.css'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from './components/Cart'


function App() {
  const greetingMsj = '¡Elegí tu hamburguesa preferida!';
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer textoSalida={greetingMsj}/> } />
        <Route path='/categorias/:categoryId' element={ <ItemListContainer /> } />
        <Route path='/cart' element={ <Cart /> } />
        <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;