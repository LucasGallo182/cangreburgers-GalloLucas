import '../style.css'
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'

export const ItemDetail = ({ datos }) => {
    const { title, subtitle, description, image, precio, stock } = datos
    const onAdd = (cantidad) => {
        console.log(`Has comprado ${cantidad} unidades`);
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