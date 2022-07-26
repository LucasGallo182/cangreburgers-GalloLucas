import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  const greetingMsj = 'BIENVENIDO';
  return (
    <div className="App">
      <NavBar />
      <div className='bodyColor'>
        <ItemListContainer textoSalida={greetingMsj} />
      </div>
      <ItemDetailContainer />
    </div>
  );
}

export default App;