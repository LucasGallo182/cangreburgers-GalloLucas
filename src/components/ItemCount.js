import '../css/ItemCount.css'
import { useState } from 'react';

export const ItemCount = ({ initial, stock, onAdd }) => {
    const [contador, setContador] = useState(parseInt(initial));

    const resta = () => {
        setContador(contador - 1);
    }

    const suma = () => {
        setContador(contador + 1);
    }

    return (
        <div className='contador'>
            <div className='seccionArriba'>
                <button disabled={contador <=1} onClick={resta}>-</button>
                <span>{contador}</span>
                <button disabled={contador >= stock} onClick={suma}>+</button>
            </div>
            <div class='botonAbajo'>
                <button disabled={stock <= 0} onClick={() => onAdd(contador)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;