import React from 'react'
import { useCartContext } from '../context/CartContext'
import '../style.css'
import Button from 'react-bootstrap/Button'

const ItemCart = ({ productos }) => {
    const { removeItem } = useCartContext()
    return (
        <tr>
            <td><img src={productos.image} alt='{product.title}' className='imgTable' /></td>
            <td>{productos.title}</td>
            <td>{productos.quantity}</td>
            <td>{productos.precio}</td>
            <td>${productos.quantity * productos.precio}</td>
            <td><Button variant="warning" onClick={() => removeItem(productos.id)}>Eliminar</Button></td>
        </tr>
    )
}

export default ItemCart