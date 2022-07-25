import '../css/main.css'
import ItemCount from '../components/ItemCount'
import ItemList from './ItemList'
import { useState, useEffect } from 'react';

const productos = [
    { id: 1, titulo: 'Doble Napolitana Tasty XL', imagen: 'https://i.ibb.co/GsDN2RV/Doble-Napolitano-XL-1.png' },
    { id: 2, titulo: 'Cheese Burger Clásica', imagen: 'https://i.ibb.co/d42dJ0r/hamburguesa-clasica.png' },
    { id: 3, titulo: 'Cuarto XL Simple', imagen: 'https://i.ibb.co/FVQtygC/MENU-Cuarto-XL-Simple.png' },
    { id: 4, titulo: 'Triple Bacon & Cheddar', imagen: 'https://i.ibb.co/ZKBPKst/Stacker-Triple.png' }
]

export const ItemListContainer = (props) => {
    const [datos, setDatos] = useState([])

    useEffect(() => {
        const getDatos = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos)
            }, 3000)
        })
        getDatos.then(res => setDatos(res))
    }, [])

    const onAdd = (cantidad) => {
        console.log(`Has comprado ${cantidad} unidades`);
    }

    return (
        <>
            <p className="parrafoEjemplo">{props.textoSalida}</p>
            <ItemCount initial={1} stock={6} onAdd={onAdd} />
            <div className='divBody'>
                <ItemList datos={datos} />
            </div>
        </>
    )
}

export default ItemListContainer;