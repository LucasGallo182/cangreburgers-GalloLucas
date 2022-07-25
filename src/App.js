import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  const greetingMsj = 'BIENVENIDO';
  return (
    <div className="App">
      <NavBar />
      <div className='bodyColor'>
      <ItemListContainer textoSalida={greetingMsj} />
      </div>
    </div>
  );
}

export default App;