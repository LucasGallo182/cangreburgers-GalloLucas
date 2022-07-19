import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  const greetingMsj = 'Greetings';
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer textoSalida={greetingMsj} />
      <p className='Compraste'></p>
    </div>
  );
}

export default App;