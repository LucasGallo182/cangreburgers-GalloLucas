import '../style.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'

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
                <Button disabled={contador <=1} variant='warning' onClick={resta}>-</Button>
                <span>{contador}</span>
                <Button disabled={contador >= stock} variant='warning' onClick={suma}>+</Button>
            </div>
            <div className='botonAbajo'>
                <Button disabled={stock <= 0} variant='warning' onClick={() => onAdd(contador)}>Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount;