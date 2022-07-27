import '../style.css'
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount';

export const ItemDetail = ({ data }) => {
    const onAdd = (cantidad) => {
        console.log(`Has comprado ${cantidad} unidades`);
    }
    return (
        <div className='cardDescription'>
            <Card className='paddingStyle border-0'>
                <Card.Img className='bgBodyCard' variant="top" src={data.imagen} />
                <Card.Body className='bgBodyCard'>
                    <Card.Title><span>{data.titulo}</span></Card.Title>
                    <Card.Text>
                    <p>{data.descripcion}</p>
                    <p className='precioText'>${data.precio}</p>
                    </Card.Text>
                    <ItemCount initial={1} stock={6} onAdd={onAdd} />
                </Card.Body>
            </Card>
        </div> 
    )
}

export default ItemDetail