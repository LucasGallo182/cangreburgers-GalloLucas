import '../css/main.css'
import ItemCount from '../components/ItemCount'
import 'react-toastify/dist/ReactToastify.css'

export const ItemListContainer = (props) => {

    const onAdd = (cantidad) => {
        console.log(`Has comprado ${cantidad} unidades`);
    }

    return (
        <>
            <p className="parrafoEjemplo">{props.textoSalida}</p>
            <ItemCount initial={1} stock={6} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer;