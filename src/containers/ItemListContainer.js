import '../style.css';
import ItemList from '../components/ItemList'
import { useState, useEffect } from 'react';

const productos = [
    { id: 1, titulo: 'Doble Napolitana XL', imagen: 'https://i.ibb.co/GsDN2RV/Doble-Napolitano-XL-1.png' },
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

    return (
        <>
            <p className="parrafoEjemplo">{props.textoSalida}</p>
            <div className='divBody'>
                <ItemList datos={datos} />
            </div>
        </>
    )
}

export default ItemListContainer;