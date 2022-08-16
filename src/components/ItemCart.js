import React from 'react'
import { useCartContext } from '../context/CartContext'
import '../style.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { BsFillTrashFill, BsPlusCircleFill } from "react-icons/bs"

const ItemCart = ({ productos }) => {
    const { removeItem } = useCartContext()
    return (
        <tr className='trDownTable'>
            <td><img src={productos.image} alt='{product.title}' className='imgTable' /></td>
            <td>{productos.title}</td>
            <td>x{productos.quantity}</td>
            <td>${productos.precio}</td>
            <td>${productos.quantity * productos.precio}</td>
            <td>
                <Link to={`/item/${productos.id}`}><Button variant="dark me-1"><BsPlusCircleFill /></Button></Link>
                <Button variant="danger" onClick={() => removeItem(productos.id)}><BsFillTrashFill /></Button>
            </td>
        </tr>
    )
}

export default ItemCart