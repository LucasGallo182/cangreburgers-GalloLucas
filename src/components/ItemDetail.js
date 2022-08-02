import '../style.css'
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ItemDetail = ({ datos }) => {
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    const { title, subtitle, description, image, precio, stock } = datos
    const onAdd = (quantityToAdd) => {
        console.log(`Has comprado ${quantityToAdd} unidades`)
        setCount(quantityToAdd)
        console.log(count)
        navigate('../../Cart')
    }
    return (
        <div className='cardDescription'>
            <Card className='paddingStyle border-0'>
                <Card.Img className='bgBodyCard' variant="top" src={image} />
                <Card.Body className='bgBodyCard'>
                    <Card.Title className='text-center detailTitle'><span>{title}</span></Card.Title>
                    <Card.Text className='detailSubTitle'>{subtitle}</Card.Text>
                    <Card.Text className='detailDescription'>{description}</Card.Text>
                    <Card.Text className='detailPrecio'>${precio}</Card.Text>
                    <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail