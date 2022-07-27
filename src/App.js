import './style.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';


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